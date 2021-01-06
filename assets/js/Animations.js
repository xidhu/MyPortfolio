
$(document).ready(function () {
    
    $('body').fadeOut(0, function () {
            
    });
    $('body').fadeIn(800, function () {
            
    });

    $('.btn-strt').click(function (e) { 
        e.preventDefault();
        let isMobile =  window.innerWidth < window.innerHeight?true:false;
        if(isMobile){
            $('.btn-strt').animate({width:'80vw'});
        $('.btn-strt').animate({width:'50vw'});
        }else{
            $('.btn-strt').animate({width:'25vw'});
        $('.btn-strt').animate({width:'20vw'});
        }
    });

    $(".mb-drawer-open").click(function (e) { 
     
        $('.drawer').animate({left:'-6vw'});
        $('body').click(function (e) { 
            let classList = ["drawer-container","mb-drawer-open"];
            if(!classList.includes(e.target.className) ){
                $('.drawer').animate({left:'-70vw'});
            }
        });
    });
});
