import { StringInfo } from "../../utils";

export function mockCalculateComplexity(returnValue = 999) {
  return jest.fn((_: StringInfo) => returnValue);
}
