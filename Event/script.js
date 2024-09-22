// document.getElementById('owl').onclick=function(){
//     alert("owl clicked")
// }

// document.getElementById('owl').addEventListener("click",function (e) {
// console.log("owl clicked");
// //    e.stopPropagation() 
// })

// document.getElementById('google').addEventListener('click',function(e){
//         e.preventDefault();
//         // e.stopPropagation()
//         console.log("google clicked");
//     }, false)


document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    e.preventDefault();
    if (e.target.tagName === 'IMG' || e.target.tagName === 'A' ) {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    
})