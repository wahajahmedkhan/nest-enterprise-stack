/* eslint-disable */
export default {
  displayName: 'shell-text-analysis-analyze-text-files',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../coverage/libs/shell-text-analysis/analyze-text-files',
};
