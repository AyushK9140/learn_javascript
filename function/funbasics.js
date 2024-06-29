//for single item to add in cart

function addItemtoCart(item1){
    return item1
}
console.log(addItemtoCart(200))

// Rest operator to used(...) to add one than one item to the cart
function addItemtoCart(...item1){
    return item1
}
console.log(addItemtoCart(200,400,600))


// passing object in function

const myobj={
    name:"Ayush",
    age:20,
    gender:"Male"
}
function findthevariable(...getvalue){
    return getvalue
}
console.log(findthevariable(myobj.name,myobj.age,myobj.gender))

// Passing array in function

const arr=[200,400,600,700]
function secondElement(elem){
    return elem
}
console.log(secondElement(arr[1]))