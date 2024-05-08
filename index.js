// const updateFunction = require("./update")

// const main = ()=>{
//   let a=1
//   let b=2
//   console.log("main function here")
//   const updateValue=(valueA,valueB)=>{
//     a=valueA
//     b=valueB
//   }
//   console.log("before update",a,b)
//   updateFunction(updateValue)
//   console.log("after update",a,b)

// }

// main()

const arr= [1,2,34,5]

const newArr = arr.map((item,index,arr)=>{
  console.log(item,"item")
  console.log(index,"index")
  console.log(arr,"arr")
   return arr[index] = item*2
})

console.log(newArr)