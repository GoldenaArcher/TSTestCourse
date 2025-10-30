import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/doubles";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: false,
      },
    ],
  },
  // collectCoverage: true, // Only enable via CLI --coverage
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  coverageDirectory: "coverage",
  testMatch: [`${baseDir}/**/*.test.ts`],
};

export default config;
