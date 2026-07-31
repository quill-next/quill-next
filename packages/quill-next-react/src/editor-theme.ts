import type { QuillOptions } from "quill-next";

const DEFAULT_EDITOR_THEME = "next";

export function resolveEditorTheme(
  theme: QuillOptions["theme"],
): QuillOptions["theme"] {
  return theme === undefined ? DEFAULT_EDITOR_THEME : theme;
}
