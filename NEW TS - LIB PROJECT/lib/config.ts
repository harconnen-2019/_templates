import packageJson from '../../package.json';

export const VERSION = `версия ${packageJson.version}`;

export const DEBUG = process.env.NODE_ENV !== 'production';

export const DEBUG_PREFIX = `${DEBUG ? import.meta.env.VITE_APP_API : ''}`;
