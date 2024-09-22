const btn = document.querySelector("#btn")
setInterval(function(){
    let date=new Date();
 btn.innerHTML=date.toLocaleTimeString();
},1000);