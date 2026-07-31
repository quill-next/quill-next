import { describe, expect, it } from "vitest";
import { resolveEditorTheme } from "./editor-theme";

describe("resolveEditorTheme", () => {
  it.each([
    {
      input: undefined,
      expected: "next",
    },
    {
      input: null,
      expected: null,
    },
    {
      input: "bubble",
      expected: "bubble",
    },
  ])("resolves $input to $expected", ({ input, expected }) => {
    expect(resolveEditorTheme(input)).toBe(expected);
  });
});
