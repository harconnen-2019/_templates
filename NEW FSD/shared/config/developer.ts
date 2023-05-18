const packageJson = require('../../../package.json');
export const VERSION = `${packageJson.name} --version ${packageJson.version}`;

export const DEBUG = process.env.NODE_ENV !== 'production';

export const DEBUG_PREFIX = `${DEBUG ? process.env.REACT_APP_API : ''}`;

export const log = (...mes) => {
  if (DEBUG) console.log(...mes);
};
