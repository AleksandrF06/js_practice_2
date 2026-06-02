const original = {
  name: "Alice",
  settings: {
    theme: "dark",
    languages: ["en", "ru"]
  }
};

function deepClone(object1) {
    if (Array.isArray(object1)) {
        return [...object1]
    }
    const object2 = {}
    for (let key in object1) {
        if (typeof object1[key] == 'object' && object1[key] != null) {
            object2[key] = deepClone(object1[key])
        }
    }
    return object2
}

const copy = deepClone(original);

copy.settings.theme = "light";
copy.settings.languages.push("fr");
console.log(original)
console.log(original.settings.theme); // "dark"
console.log(original.settings.languages); // ["en", "ru"]*/