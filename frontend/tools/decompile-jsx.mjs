#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';

function isJsxRuntimeCall(node) {
  return t.isCallExpression(node) && t.isIdentifier(node.callee) && ['_jsx', '_jsxs', '_jsxDEV'].includes(node.callee.name);
}

function buildJSXElementFromCall(node) {
  // node.arguments: [type, props]
  const [typeNode, propsNode] = node.arguments;

  let openingName;
  if (t.isStringLiteral(typeNode)) {
    openingName = t.jsxIdentifier(typeNode.value);
  } else if (t.isIdentifier(typeNode)) {
    openingName = t.jsxIdentifier(typeNode.name);
  } else if (t.isMemberExpression(typeNode)) {
    // e.g. Some.Component -> build JSXMemberExpression
    function memberToJSX(member) {
      if (t.isIdentifier(member.object) && t.isIdentifier(member.property)) {
        return t.jsxMemberExpression(t.jsxIdentifier(member.object.name), t.jsxIdentifier(member.property.name));
      }
      if (t.isMemberExpression(member.object)) {
        return t.jsxMemberExpression(memberToJSX(member.object), t.jsxIdentifier(member.property.name));
      }
      return t.jsxIdentifier('Unknown');
    }
    openingName = memberToJSX(typeNode);
  } else {
    openingName = t.jsxIdentifier('Fragment');
  }

  const attrs = [];
  let children = [];

  if (t.isObjectExpression(propsNode)) {
    for (const prop of propsNode.properties) {
      if (t.isObjectProperty(prop) && (t.isIdentifier(prop.key) || t.isStringLiteral(prop.key))) {
        const keyName = t.isIdentifier(prop.key) ? prop.key.name : prop.key.value;
        if (keyName === 'children') {
          // children can be ArrayExpression, StringLiteral, CallExpression, etc.
          const val = prop.value;
          if (t.isArrayExpression(val)) {
            for (const el of val.elements) {
              if (t.isStringLiteral(el)) children.push(t.jsxText(el.value));
              else if (isJsxRuntimeCall(el)) children.push(buildJSXElementFromCall(el));
              else if (t.isCallExpression(el) && isJsxRuntimeCall(el)) children.push(buildJSXElementFromCall(el));
              else if (t.isExpression(el)) children.push(t.jsxExpressionContainer(el));
            }
          } else if (t.isStringLiteral(val)) {
            children.push(t.jsxText(val.value));
          } else if (isJsxRuntimeCall(val)) {
            children.push(buildJSXElementFromCall(val));
          } else if (t.isCallExpression(val) && isJsxRuntimeCall(val)) {
            children.push(buildJSXElementFromCall(val));
          } else if (t.isExpression(val)) {
            children.push(t.jsxExpressionContainer(val));
          }
          continue;
        }

        // normal prop -> JSXAttribute
        let attrValue = null;
        if (t.isStringLiteral(prop.value)) attrValue = t.stringLiteral(prop.value.value);
        else attrValue = t.jsxExpressionContainer(prop.value);

        attrs.push(t.jsxAttribute(t.jsxIdentifier(keyName), attrValue));
      } else if (t.isSpreadElement(prop)) {
        attrs.push(t.jsxSpreadAttribute(prop.argument));
      }
    }
  }

  const opening = t.jsxOpeningElement(openingName, attrs, children.length === 0);
  const closing = children.length === 0 ? null : t.jsxClosingElement(t.isJSXMemberExpression(openingName) ? openingName : openingName);

  const jsxChildren = children.map(c => {
    if (t.isJSXElement(c)) return c;
    if (t.isJSXText(c)) return c;
    return c;
  });

  return t.jsxElement(opening, closing, jsxChildren, children.length === 0);
}

async function transformFile(filePath) {
  const src = await fs.readFile(filePath, 'utf8');
  let ast;
  try {
    ast = parse(src, { sourceType: 'module', plugins: ['jsx', 'classProperties', 'optionalChaining'] });
  } catch (err) {
    console.error(`Échec parse ${filePath}:`, err.message);
    return;
  }

  let modified = false;

  traverse.default(ast, {
    CallExpression(path) {
      const node = path.node;
      if (isJsxRuntimeCall(node)) {
        try {
          const jsx = buildJSXElementFromCall(node);
          path.replaceWith(jsx);
          modified = true;
        } catch (err) {
          console.error('Erreur conversion node dans', filePath, err.message || err);
        }
      }
    },
    ImportDeclaration(path) {
      if (path.node.source && t.isStringLiteral(path.node.source) && path.node.source.value === 'react/jsx-runtime') {
        path.remove();
        modified = true;
      }
    }
  });

  if (!modified) return;

  const out = generate.default(ast, { /* options */ }, src).code;
  await fs.writeFile(filePath, out, 'utf8');
  console.log(`Modifié: ${filePath}`);
}

async function run() {
  const cwd = process.cwd();
  const pattern = 'src/**/*.{jsx,js}';
  const files = await glob(pattern, { cwd });
  if (!files.length) {
    console.log('Aucun fichier cible trouvé.');
    return;
  }
  for (const f of files) {
    const fp = path.resolve(cwd, f);
    await transformFile(fp);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
