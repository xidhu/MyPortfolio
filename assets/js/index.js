let isMobile =  window.innerWidth < window.innerHeight?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented.";
}
window.addEventListener("resize",(event)=>{
    isMobile =  window.innerWidth < window.innerHeight?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented.";
}else{
    location.reload();
}
})