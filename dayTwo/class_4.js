// tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="sumit"
// console.log(tinderUser);


// const regUse={
//     email:"sumitgupta@gmail.com",
//     fullName:{
//         userName:{
//             firstName:"sumit",
//             lastName:"Gupta"
//         }
//     },
//     RollNo:22200100202
// }

// console.log(regUse);
// console.log(regUse.fullName.userName.firstName);
// console.log(regUse.RollNo);



const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
 
// const obj3={obj1 , obj2}
// console.log(obj3);
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);

// const obj3={...obj1,...obj2}
// console.log(obj3);

// const user=[
//     {
//         id:1,
//         email:"s@gmail.com"
//     },
//     {
//         id:2,
//         email:"su@gmail.com"
//     },
//     {
//         id:3,
//         email:"sum@gmail.com"
//     }
// ]
 
// user()

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("id"));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"sumit"
}
const {courseInstructor:inst}=course
const {price:pr}=course
const {coursename:cr}=course
console.log(inst);
console.log(pr);
console.log(cr);








