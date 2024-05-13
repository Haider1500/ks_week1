const names = ["ali", "haider", "ammar", "sajjad"];
names[0] = "bilal";
console.log(names);

// destructuring array
const [a, b] = names;
console.log(a, b);

const droppedName = names.pop();
console.log(droppedName);

// slice, splice, reverse, concat, sort, join
//  forEach loop
//  map, filter, reduce, find, flat, flatMap methods

const numbers = [2, 5, 8, 4, 10];

// map
const squaredArr = numbers.map((num) => {
  return num * num;
});

console.log(squaredArr);

// filter
const aboveFive = numbers.filter((num) => num > 5);
console.log(aboveFive);

// reduce
const totalSum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalSum);

// slice
const slicedArr = numbers.slice(2, 4);
console.log(slicedArr, "slicedArr");

// reverse
const reversedArr = numbers.reverse();
console.log(reversedArr, "reversedArr");

// forEach and push
let duplicates = [];
numbers.forEach((item) => {
  duplicates.push(item * 2);
});
console.log(duplicates, "duplicates");
