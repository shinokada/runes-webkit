import { tv } from "tailwind-variants";

export const highlightcompo = tv({
  slots: {
    base: "mt-4 max-w-4xl rounded bg-gray-50 dark:bg-gray-700",
    badge: "absolute -top-8 right-[8px]",
    button: "absolute right-2 top-2 rounded px-2 py-1 text-white"
  },
  variants: {
    expanded: {
      true: { base: "min-h-full" },
      false: { base: "" }
    }
  }
});
