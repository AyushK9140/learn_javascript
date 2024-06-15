//Stack memoryKashyap(primitive datatype -->call by value)

let user1="Ayush"
let user2=user1
console.log(user2)  // user2 accessing the duplicate vlue of user1
user2="Kashyap"
console.log(user1)
console.log(user2)

//Heap memory(non primitive datatype  -->call by reference)

let userone={
    name:"Ayush",
    age:20,
}
let usertwo=userone
usertwo={
    name:"",
    age:21,
}
console.log(userone)
console.log(usertwo)


