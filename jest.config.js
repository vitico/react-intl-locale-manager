module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.ts",
    "!src/formatjs/**/*",
    "!src/manage.ts",
  ],
};
