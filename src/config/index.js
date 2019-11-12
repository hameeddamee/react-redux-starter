import defaultConfig from "./defaultConfig.json";

const config = {};
// Reliably confirms that x is an Object, but not a Function, Array, etc.
const isObject = x => Object.prototype.toString.call(x) === "[object Object]";
for (const key in defaultConfig) {
  if (isObject(defaultConfig[key])) {
    config[key] = { ...defaultConfig[key] };
  } else {
    config[key] = defaultConfig[key];
  }
}

export default config;
