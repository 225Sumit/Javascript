// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums =myNums.filter((num)=>{
//     console.log(num);   
//     return num>4
// })

// console.log(myNums);
// console.log(newNums);



// const newNums=[]
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// myNums.forEach((num)=>{
//     if(num<4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books=[
    {
    title:'book One',genre:'fiction',publish:'1981',edition:'2004'
    },
    {
        title:'book Two',genre:'history',publish:'1999',edition:'2005'
    },
    {
    title:'book four',genre:'fiction',publish:'2000',edition:'2004'
    },
    {
        title:'book three',genre:'Science',publish:'1999',edition:'2009'
    },

] 
let userbooks=books.filter((bk)=>{
    return bk.genre==="history" || bk.edition>2000
})
console.log(userbooks);
