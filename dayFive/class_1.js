// for(let i =0;i<=10;i++)
// {
    
//     const element=i;
//     if(element==5){
//         console.log("5 is the best no");
        
//     }
    
//     console.log(element);
// }

// for(let i=0;i<=10;i++){
//     console.log(`outer loop value is ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop value is ${j} and inner loop is ${i}`);
//         console.log(`${i} * ${j} =  ${i*j}`);
        
        
//     }
// }

// let myArray =["flash","batman","superman","amit","sumit"]
// console.log(myArray.length);
// for(let i=0;i<myArray.length;i++){
//     const element=myArray[i];
//     console.log(element);
    
// }

// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("detected 5");
        continue
    }

    if(i==15){
        console.log("detected 15");
        break
    }
    console.log(`value of i is ${i}`);
    
}