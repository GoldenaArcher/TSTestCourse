export const toUpperCase = (str: string): string => {
  return str.toUpperCase();
};

export type StringInfo = {
  length: number;
  lowercase: string;
  uppercase: string;
  characters: string[];
  extraInfo: Record<string, any>;
};

export const getStringInfo = (arg: string): StringInfo => {
  return {
    length: arg.length,
    lowercase: arg.toLowerCase(),
    uppercase: arg.toUpperCase(),
    characters: arg.split(""),
    extraInfo: {},
  };
};
