import { getStringInfo, toUpperCase } from "../app/utils";

describe("Utils", () => {
  it("should convert string to uppercase", () => {
    // arrange
    const sut = toUpperCase; // system under test
    const expected = "HELLO";

    // act
    const actual = sut("hello");

    // assert
    expect(actual).toBe(expected);
  });

  it("should return info for valid string", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    expect(actual.lowercase).toBe("my-string");
    expect(actual.uppercase).toBe("MY-STRING");
    expect(actual).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["M", "y", "S", "t", "r", "i", "n", "g", "-"])
    );

    expect(actual.extraInfo).toBeTruthy();
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toEqual({});
  });
});

describe("ToUpperCase examples", () => {
  it.each([
    { input: "abc", expected: "ABC" },
    { input: "AbC", expected: "ABC" },
    { input: "aBc123", expected: "ABC123" },
    { input: "123!@#", expected: "123!@#" },
  ])("should convert $input to $expected", ({ input, expected }) => {
    const sut = toUpperCase;
    const actual = sut(input);
    expect(actual).toBe(expected);
  });
});

describe("getStringInfo - arg My-String", () => {
  it("should have length 9", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    expect(actual).toHaveLength(9);
  });
  it("should have lowercase my-string", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    expect(actual.lowercase).toBe("my-string");
  });
  it("return right characters", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["M", "y", "S", "t", "r", "i", "n", "g", "-"])
    );
  });
  it("return defined extraInfo", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    expect(actual.extraInfo).toBeDefined();
  });
  it("return right extraInfo", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    expect(actual.extraInfo).toEqual({});
  });
});
