module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/test/test-setup.tsx'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
  },
  testRegex: '\\.(test)\\.(ts|tsx|js)?$',
};
