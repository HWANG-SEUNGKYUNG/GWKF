$(document).ready(function(){

    //메인 메뉴-롤오버시 서브메뉴 슬라이드다운
    $(".dp1").mouseenter(function(){
        $(".sub").stop().slideDown();
    });
    $("header").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    //메인페이지 - 메인슬라이더
    $('.main_visual_imgs').slick({
        autoplay:true,
        autoplaySpeed:1200,
        speed:1800,
        arrows:false,
        dots:true
    });


    var vi = "off";

    $(".f_site").click(function(){
        if(vi == "off"){
            $(".business").slideDown(100);
            vi = "on";
        }
        else{
            $(".business").slideUp(100);
            vi = "off";
        }
    });
});