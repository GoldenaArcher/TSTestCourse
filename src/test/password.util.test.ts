// iteration 1:
//  a password is valid if:
//   - at least 8 characters
//   - has at least 1 uppercase letters
//   - has at least 1 lowercase letters
// iteration 2:
//  return the reasons for invalidity
// iteration 3:
//  admin password should contain a number

import { PasswordChecker, PasswordErrors } from "../app/password.util";

describe("PasswordChecker", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("should return false for password shorter than 8 characters", () => {
    const result = sut.checkPassword("1234567");

    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.TOO_SHORT);
  });

  it("should return true for password with at least 8 characters", () => {
    const result = sut.checkPassword("123456Aa");
    expect(result.valid).toBe(true);
    expect(result.reasons).toHaveLength(0);
  });

  it("should return false if password contains no uppercase letters", () => {
    const result = sut.checkPassword("123456a8");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_UPPERCASE);
  });

  it("should return false if password contains no lowercase letters", () => {
    const result = sut.checkPassword("123456A8");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_LOWERCASE);
  });

  it("should return false if admin password contains no number", () => {
    const result = sut.checkAdminPassword("AdminPass");
    expect(result.valid).toBe(false);
    expect(result.reasons).toContain(PasswordErrors.NO_NUMBER);
  });
});
