const mySym= Symbol("key1")
const JsUser={
    name:"Sumit",
    "FullName":"Sumit Gupta",
    [mySym]:"mykey1",
    age:18,
    location:"Kanpur",
    email:"Sumit@chatgpt.com",
    isLoginDays:["monday","Friday"]
}

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]);

JsUser.email="225sumitgupta@gmail.com"
console.log(JsUser);

// Object.freeze(JsUser);

JsUser.email="226sumitgupta@gmail.com";
console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello JS user");
    console.log(`hi ,${this.name}`);
    
}

 JsUser.greeting()




