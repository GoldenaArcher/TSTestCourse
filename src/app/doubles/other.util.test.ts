import { mockCalculateComplexity } from "./__mocks__/calculate-complexity.mock";
import { transformUppercaseOutput } from "./__mocks__/test-helpers/output-format.util";
import { mockedUuidValue } from "./__mocks__/uuid";
import {
  calculateComplexity,
  OtherStringUtils,
  toUpperCaseWithCB,
} from "./other.util";

jest.mock("./other.util", () => ({
  ...jest.requireActual("./other.util"),
  calculateComplexity: mockCalculateComplexity(),
}));

describe("getStringInfo - arg empty string", () => {
  it.skip("should calculate complexity - stubs", () => {
    const someInfo = {
      length: 5,
      extraInfo: { a: 1, b: 2, c: 3 },
    };

    const sut = calculateComplexity;

    const actual = sut(someInfo as any);

    expect(actual).toBe(15);
  });

  it("should calculate complexity - mock", () => {
    const someInfo = {
      length: 5,
      extraInfo: { a: 1, b: 2, c: 3 },
    };

    const sut = calculateComplexity;

    const actual = sut(someInfo as any);

    expect(actual).toBe(999);
  });

  it('should call callback with "Invalid argument" for invalid input - toUpperCaseWithCB - fake', () => {
    const sut = toUpperCaseWithCB;
    const actual = sut("", () => {});

    expect(actual).toBeUndefined();
  });

  it("should call callback with message including input arg - toUpperCaseWithCB - fake", () => {
    const sut = toUpperCaseWithCB;
    const actual = sut("test", () => {});
    expect(actual).toBe(transformUppercaseOutput("TEST", mockedUuidValue));
  });

  describe("mock callback tests for toUpperCaseWithCB", () => {
    let callbackMock = jest.fn<string, [string]>();

    beforeEach(() => {
      callbackMock.mockClear();
    });

    it('should call callback with "Invalid argument" for invalid input', () => {
      const sut = toUpperCaseWithCB;
      const actual = sut("", callbackMock);

      expect(actual).toBeUndefined();
      expect(callbackMock).toHaveBeenCalledWith("Invalid argument");
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });

    it("should call callback with message including input arg", () => {
      const sut = toUpperCaseWithCB;
      const actual = sut("test", callbackMock);
      expect(actual).toBe(transformUppercaseOutput("TEST", mockedUuidValue));

      expect(callbackMock).toHaveBeenCalledWith("called function with test");
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("fake callback tests for toUpperCaseWithCB", () => {
    let cbArgs: string[] = [];
    let timesCalled = 0;

    function mockCallback(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timesCalled = 0;
    });

    it('should call callback with "Invalid argument" for invalid input', () => {
      const sut = toUpperCaseWithCB;
      const actual = sut("", mockCallback);

      expect(actual).toBeUndefined();
      expect(cbArgs).toContain("Invalid argument");
      expect(timesCalled).toBe(1);
    });

    it("should call callback with message including input arg", () => {
      const sut = toUpperCaseWithCB;
      const actual = sut("test", mockCallback);
      expect(actual).toBe(transformUppercaseOutput("TEST", mockedUuidValue));

      expect(cbArgs).toContain("called function with test");
      expect(timesCalled).toBe(1);
    });
  });

  describe("spy callback tests for toUpperCase", () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    it("should spy on toUpperCase with correct argument", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");

      const arg = "spyTest";
      sut.toUpperCase(arg);

      expect(toUpperCaseSpy).toHaveBeenCalledWith(arg);
      expect(toUpperCaseSpy).toHaveBeenCalledTimes(1);

      toUpperCaseSpy.mockRestore();
    });

    it("should spy on logArg with correct argument", () => {
      const logArgSpy = jest.spyOn(sut, "logArg");

      const arg = "logTest";
      sut.logArg(arg);

      expect(logArgSpy).toHaveBeenCalledWith(arg);
      expect(logArgSpy).toHaveBeenCalledTimes(1);

      logArgSpy.mockRestore();
    });

    it("should spy on privateLogger with mock implementation", () => {
      jest
        .spyOn(sut as any, "privateLogger")
        .mockImplementation((...args: any[]) => {
          console.log("Mocked private logger: " + args[0]);
        });

      (sut as any).privateLogger("privateTest");
    });
  });
});
