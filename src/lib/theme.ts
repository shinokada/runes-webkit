import { tv } from "tailwind-variants";

export const highlightcompo = tv({
  base: "mt-4 max-w-4xl rounded relative",
  variants: {
    expanded: {
      true: { base: "min-h-full" },
      false: { base: "" }
    }
  }
});
