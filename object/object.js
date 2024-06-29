const myObj={
    name:"Ayush",
    age:20,
    height:5.10,
    address:"Gorakhpur",
    age:22,
}
console.log(myObj.height)//to print height
console.log(myObj.height.toPrecision(1)) //to print height precise to 1 digit

//Another way to print the object element

console.log(myObj["age"])
myObj.age=22 //chang the value of variable
console.log(myObj["age"])