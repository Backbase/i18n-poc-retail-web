/* eslint-disable */
export default {
  displayName: 'shared-e2e',
  preset: '../../../../jest.preset.js',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/shared/util/e2e',
  coverageReporters: ['html', 'lcov'],
};
