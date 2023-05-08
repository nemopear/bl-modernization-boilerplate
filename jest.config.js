// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    coverageDirectory: "./coverage",
    collectCoverageFrom: [
        "src/components/**/*.tsx",
        "src/context/**/*.tsx",
        "src/helpers/**/*.ts",
        "src/provider/**/*.tsx",
        "src/services/**/*.ts",
        "pages/*/**/*.tsx",
    ],
};

const asyncConfig = createJestConfig(customJestConfig);
module.exports = async () => {
    const config = await asyncConfig();
    config.transformIgnorePatterns = ["node_modules/@craftjs/.*"];
    return config;
};
