import { toUpperCase } from "../app/utils";

describe("Utils", () => {
  it("should convert string to uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });
});
