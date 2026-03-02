"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
function Collapsible({ ...props }) {
  return (
    /*#__PURE__*/ <CollapsiblePrimitive.Root
      data-slot="collapsible"
      {...props}
    />
  );
}
function CollapsibleTrigger({ ...props }) {
  return (
    /*#__PURE__*/ <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}
function CollapsibleContent({ ...props }) {
  return (
    /*#__PURE__*/ <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
