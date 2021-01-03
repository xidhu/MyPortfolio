let isMobile =  window.innerWidth < 500 && window.innerHeight < 300||window.innerHeight > window.innerWidth?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented.";
}
window.addEventListener("resize",(event)=>{
    isMobile =  (window.innerWidth < 500 && window.innerHeight < 300) ||window.innerHeight > window.innerWidth?true:false;
console.log(isMobile);
if(isMobile){
    document.body.innerHTML = "Mobile Version Not Implemented";
}else{
    location.reload();
}
})