const isDev = __DEV__;

const logger = {
  log: isDev ? console.log : () => {},
};

export default logger;
