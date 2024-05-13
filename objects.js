const obj = {
  f_name: "ali",
  class: "Mern-17",
  age: 10,
};

console.log(obj.class);

obj["age"] = 20;

console.log(obj);

// destructuring

const { f_name, age } = obj;

console.log(f_name, age);

// keys
const keys = Object.keys(obj);
console.log(keys);

// values
const values = Object.values(obj);
console.log(values);

// entries
const entries = Object.entries(obj);
console.log(entries);
