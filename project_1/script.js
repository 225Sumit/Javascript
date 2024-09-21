const body=document.querySelector('body')
const btn=document.querySelectorAll(".btn")
btn.forEach(function(btn){
btn.addEventListener("click",function(e){
    if(e.target.id == 'red'){
        body.style.backgroundColor=e.target.id; 
    }
    if(e.target.id == 'green'){
        body.style.backgroundColor=e.target.id; 
    }
    if(e.target.id == 'yellow'){
        body.style.backgroundColor=e.target.id; 
    }
    if(e.target.id == 'aqua'){
        body.style.backgroundColor=e.target.id; 
    }
})
})