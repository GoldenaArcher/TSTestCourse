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

    expect(actual.characters).toEqual(["M", "y", "-", "S", "t", "r", "i", "n", "g"]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
        expect.arrayContaining(["M", "y", "S", "t", "r", "i", "n", "g", "-"])
    )

    expect(actual.extraInfo).toBeTruthy();
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toEqual({});
  });
});
