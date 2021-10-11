module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|CSS)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['node_modules/', '__integration__'],
}
