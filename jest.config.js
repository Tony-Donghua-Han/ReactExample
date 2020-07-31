module.exports = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // Automatically clear mock calls and instances between every test
    // clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // An array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
      "json",
      "text",
      "lcov",
      "clover",
      "cobertura",
    ],

    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: null,

    // A set of global variables that need to be available in all test environments
    // globals: {},

    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],

    // An array of file extensions your modules use
    // moduleFileExtensions: [
    //   "js",
    //   "json",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "node"
    // ],

    // Makes public path from imports
    // "@public/(.*)$": "<rootDir>/src/public/$1",
    // Work with webpack, change all css/sass import into no working import
    moduleNameMapper: {
        "\\.(css|sass)$": "<rootDir>/src/__mocks__/styleMock.ts",
    },

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",

    // Use this configuration option to add custom reporters to Jest
    reporters: ["default", "jest-junit"],

    // Automatically reset mock state between every test
    // resetMocks: false,

    // Automatically restore mock state between every test
    // restoreMocks: false,

    // The root directory that Jest should scan for tests and modules within
    // rootDir: null,

    // A list of paths to directories that Jest should use to search for files in
    roots: ["<rootDir>/src"],

    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // The test environment that will be used for testing
    testEnvironment: "node",

    // The glob patterns Jest uses to detect test files
    // testMatch: [
    //   "**/__tests__/**/*.[jt]s?(x)",
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
    // ],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // This option allows use of a custom test runner
    // testRunner: "jasmine2",

    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",

    // A map from regular expressions to paths to transformers
    // transform: { "^.+\\.tsx?$": "ts-jest" },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,

    // Indicates whether each individual test should be reported during the run
    verbose: true,

    setupFilesAfterEnv: ["<rootDir>src/__test__/setupEnzyme.ts"],
};
