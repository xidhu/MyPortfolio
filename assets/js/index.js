let get_started_btn = document.querySelector('.btn-strt');

get_started_btn.addEventListener('click',(e)=>{
    let isMobile =  window.innerWidth < window.innerHeight?true:false;
    window.location.hash = "home";
    setTimeout(()=>{
        isMobile?window.location.hash = "services-mb":window.location.hash = "services";
    },500);
})