module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  // Transform files before running tests
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use Babel to transform JavaScript and JSX files
  },
  testEnvironment: "jsdom",
  coverageReporters: ["json", "lcov", "text", "clover"],
};
