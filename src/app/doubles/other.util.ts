import { v4 } from "uuid";
import { StringInfo } from "../utils";

type LoggerServiceCallBack = (message: string) => void;

export function calculateComplexity(stringInfo: StringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCB(arg: string, cb: LoggerServiceCallBack) {
  if (!arg) {
    cb("Invalid argument");
    return;
  }

  cb("called function with " + arg);
  return arg.toUpperCase() + " " + v4();
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCase(arg: string) {
  return arg.toLowerCase();
}

export class OtherStringUtils {
  private privateLogger(arg: string) {
    console.log("Logging from private method: " + arg);
  }

  public logArg(arg: string) {
    console.log("Argument received: " + arg);
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }
}
