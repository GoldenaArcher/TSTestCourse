import type { Config } from "@jest/types";

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
  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
  coverageDirectory: "coverage",
};

export default config;
