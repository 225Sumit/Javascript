const myObj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple'
}
for(const [key] in myObj){
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const pro=["js",'rb','py','java','cpp']
for(const key in pro){
    console.log(pro[key]);
    
}


const loc =new Map()
loc.set("IN","India")
loc.set("USA","United States of America")
loc.set("FR","France")
loc.set("IN","India")
console.log(loc);

for(const map in loc){
    console.log(map);
    
}