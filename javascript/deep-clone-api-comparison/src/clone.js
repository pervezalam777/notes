var _ = require("lodash");

export function cloneWithES6Spread(data) {
  let obj = { ...data };
  let entries = Object.entries(obj);
  entries.forEach(entry => {
    if (typeof entry[1] === "object") {
      obj[entry[0]] = cloneWithES6Spread(entry[1]);
    }
  });
  return obj;
}

export function cloneWithJSONAPI(data) {
  return JSON.parse(JSON.stringify(data));
}

export function cloneWithLodash(data) {
  return _.cloneDeep(data);
}
