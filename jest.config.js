const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
    '^.+\\.(ts|js|jsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^uuid$': require.resolve('uuid'),
  },
  transformIgnorePatterns: [
    '/node_modules/(?!uuid)/',
  ],
};