import { tv } from "tailwind-variants";

export const highlightcompo = tv({
  base: "mt-4 max-w-4xl rounded bg-gray-50 dark:bg-gray-700 relative",
  variants: {
    expanded: {
      true: { base: "min-h-full" },
      false: { base: "" }
    }
  }
});
