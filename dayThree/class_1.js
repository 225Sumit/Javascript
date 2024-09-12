// function myName() {
//     console.log("S");
//     console.log("U");
//     console.log("M");
//     console.log("I");
//     console.log("T");
//     console.log("G");
//     console.log("U");
//     console.log("P");
//     console.log("T");
//     console.log("A");
// }
// myName()

function add(num1,num2) {
    console.log(num1 + num2);
}
// add(3,9)
// add(3,"a")


// function add(num1,num2) {
//     let result = num1 + num2
//     return result
// }
// result=add(12,23)
// console.log("Result:",result);


// function loginUser(username){
//     console.log(`${username} just logged In`);
//     return
     
// }
// loginUser("sumit")

// function Additems(...item){
//     console.log(item);
    
//     return item
// }
// Additems(10,23,4,5,5,6,62,2,2323,3234)


const user={
    Name:"sumit gupta",
    RollNo:210023
}

function supe(obj){
    console.log(`name is ${obj.Name} and rollno is ${obj.RollNo}`);
    
}
supe(user)