var a = 10;
var a = 17;

console.log(a);

let b = 20;
b = 12;
console.log(b);

const c = 10;
a;
console.log(c);

{
  let b = 20;
  const c = 49;
  console.log(c);
  console.log(b, "let inside scope");
}
console.log(b, "let outside scope");
console.log(c, "const outside scope");
