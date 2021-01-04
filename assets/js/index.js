let get_started_btn = document.querySelector('.btn');

get_started_btn.addEventListener('click',(e)=>{
    window.location.hash = "#home";
    setTimeout(()=>{
        window.location.hash = "services";
    },500);
})