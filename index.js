const updateFunction = require("./update")

const main = ()=>{
  let a=1
  let b=2
  console.log("main function here")
  const updateValue=(valueA,valueB)=>{
    a=valueA
    b=valueB
  }
  console.log("before update",a,b)
  updateFunction(updateValue)
  console.log("after update",a,b)

}

main()