// const user = {
//     username:"sumit",
//     price:999,
//     new :function () {
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }
// user.new()
// user.username="Amit"
// user.new()

const use=() =>{
    let username = "sumit"
    console.log(this);
    
}
use()

const addTwo=(num1,num2)=>{
    return num1 + num2
}
console.log(addTwo(3,4));
