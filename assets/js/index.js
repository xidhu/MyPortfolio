let isMobile =  window.innerWidth < 700 || window.innerHeight < 600?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented.";
}
window.addEventListener("resize",(event)=>{
    let isMobile =  window.innerWidth < 700 || window.innerHeight < 700?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = window.innerWidth +"  "+window.innerHeight+"  "+"Mobile Version Not Implemented.";
}else{
    location.reload();
}
})