export function collectObjectProperties(o: object) {
  return Object.getOwnPropertyNames(o).reduce<Record<string, unknown>>((obj, key) => {
    obj[key] = (o as Record<string, unknown>)[key];
    return obj;
  }, {});
}
