let isMobile =  window.innerWidth < 500 && window.innerHeight < 300?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented.";
}
window.addEventListener("resize",(event)=>{
    let isMobile =  window.innerWidth < 500 && window.innerHeight < 300?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented";
}else{
    location.reload();
}
})