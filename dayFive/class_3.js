// const arr=[1,2,3,4,5,6]
// for(const num of arr){
//     console.log(num);
    
// }

// const greeting="hello world!"
// for(const greet of greeting){
//     console.log(`each word is  ${greet}`);
    
// }


// const loc =new Map()
// loc.set("IN","India")
// loc.set("USA","United States of America")
// loc.set("FR","France")
// loc.set("IN","India")
// console.log(loc);

// for(const map of loc){
    // console.log(map);
    
// }

// for(const [key,value] of loc){
//     console.log(key,":-",value);
    
// }

const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
for(let [key,value] of myObject){
    console.log(`${key} and ${value}`);
    
}