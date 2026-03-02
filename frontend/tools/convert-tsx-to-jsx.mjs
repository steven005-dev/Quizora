import { promisify } from 'util';
import { transformAsync } from '@babel/core';
import fs from 'fs';
import path from 'path';

const { glob } = await import('glob');
// In glob@8 the exported `glob` returns a Promise, use it directly
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function convertFile(filePath) {
  const src = await readFile(filePath, 'utf8');
  const { code } = await transformAsync(src, {
    filename: path.basename(filePath),
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
      ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
    ],
    babelrc: false,
    configFile: false,
    sourceMaps: false,
    plugins: [],
  });

  const outPath = filePath.replace(/\.tsx?$/i, '.jsx');
  await writeFile(outPath, code, 'utf8');
  return outPath;
}

async function run() {
  const cwd = process.cwd();
  const pattern = 'src/**/*.tsx';
  console.log(`Recherche des fichiers: ${pattern}`);
  const files = await glob(pattern, { cwd, nodir: true, absolute: true });
  if (!files.length) {
    console.log('Aucun fichier .tsx trouvé.');
    return;
  }
  console.log(`Trouvé ${files.length} fichiers. Début de la conversion...`);
  for (const f of files) {
    try {
      const out = await convertFile(f);
      console.log(`Converti: ${f} -> ${out}`);
    } catch (err) {
      console.error(`Échec conversion ${f}:`, err.message || err);
    }
  }
  console.log('Conversion terminée.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
