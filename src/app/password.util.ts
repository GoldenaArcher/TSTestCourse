export enum PasswordErrors {
  TOO_SHORT = "Password is too short",
  NO_UPPERCASE = "Password must contain at least one uppercase letter",
  NO_LOWERCASE = "Password must contain at least one lowercase letter",
  NO_NUMBER = "Admin password must contain at least one number",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    this.checkForLength(password, reasons);
    this.checkForUppercase(password, reasons);
    this.checkForLowercase(password, reasons);

    return {
      valid: reasons.length === 0,
      reasons,
    };
  }

  public checkAdminPassword(password: string): CheckResult {
    const result = this.checkPassword(password);
    this.checkForNumber(password, result.reasons);

    return {
      valid: result.reasons.length === 0,
      reasons: result.reasons,
    };
  }

  private checkForLength(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.TOO_SHORT);
    }
  }

  private checkForUppercase(password: string, reasons: PasswordErrors[]) {
    if (!/[A-Z]/.test(password)) {
      reasons.push(PasswordErrors.NO_UPPERCASE);
    }
  }

  private checkForLowercase(password: string, reasons: PasswordErrors[]) {
    if (!/[a-z]/.test(password)) {
      reasons.push(PasswordErrors.NO_LOWERCASE);
    }
  }

  private checkForNumber(password: string, reasons: PasswordErrors[]) {
    if (!/\d/.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }
}
