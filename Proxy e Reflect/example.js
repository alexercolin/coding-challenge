function createArray() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0;
        target.length++;
        Reflect.set(target, key, value);
      },
      get(target, key) {
        if (typeof key === "string" && key.match(/\d+/)) {
          if (!(Reflect.has(target, key))) {
            throw `Property ${key} not found`;
          }
        }
        return target[key];
      },
      deleteProperty(target, key) {
        if (key in target) {
          target.length--;
          Reflect.deleteProperty(target, key)
        }
      },
    }
  );
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "Javascript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];

console.log(languages);
console.log(languages.length);
