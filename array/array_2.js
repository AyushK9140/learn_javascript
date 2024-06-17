//Concatanation
const myArr=["Ayush","Aman","Adarsh","Virat","Suresh"]
const newArr=["Anuj","Rahul","Suman","Ashish","Aviraj"]
const obtArr= myArr.concat(newArr)
console.log(obtArr)

//Another wat to merge two array
console.log(myArr.push(newArr))

// Spread
const spArr=[...myArr,...newArr]
console.log(spArr)

//flat

const another_Array=[1,2,3,[4,5,6,7[8,[9,10]]]]
const real_another_Array=another_Array.flat(20)
console.log(real_another_Array)

