import { describe, it, expect } from "vitest";

describe("json-minify-cli", () => {
  it("should minify JSON", () => {
    const obj = { name: "John", age: 30 };
    const result = JSON.stringify(obj);
    expect(result).toBe('{"name":"John","age":30}');
  });

  it("should pretty-print JSON", () => {
    const obj = { name: "John" };
    const result = JSON.stringify(obj, null, 2);
    expect(result.includes("\n")).toBe(true);
  });
});
