import { tv } from "tailwind-variants";

export const highlightCompo = tv({
  base: "max-w-4xl rounded-md relative",
  variants: {
    expanded: {
      true: "min-h-full"
    }
  }
});

export const codewrapper = tv({
  slots: {
    base: "max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r dark:border-gray-600 dark:bg-gray-950",
    inner: "p-6"
  }
});
