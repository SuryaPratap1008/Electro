const axios = require('axios')

async function getsum(a,b){
    console.log("making a get request ")
    await axios.get("https://dummyjson.com/products/1").then((res)=>{
        console.log(res.data)
    })
    console.log("making a second get request")    
    await axios.get("https://dummyjson.com/products/1").then((res)=>{
        console.log(res.data)
    })    
    
    console.log("starting sum")
    let c =await a+b
    console.log("sum is completed")
    return c
        
}
function greet(){
    console.log("hello")
}

console.log("calling the function")
getsum(1,3)
console.log("after the function is begin called")
console.log("once more")
setInterval(greet,10)