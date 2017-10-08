
$(document).ready(function(){

    var imageArr = [ "images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg" ];
    var i = 0;
    var flag=0;

     function next(){
        if(flag==1) {
            for(var j=0; j<5; j++){
                if(imgsrc==imageArr[j]){
                    i=j;
                    break;
                }
            }
            flag=0;
        }

        if(i < imageArr.length-1){
            i++;
        }else{
            i=0;
        }

        $("#slideshow > .img").fadeTo(200, 0.5);
        setTimeout(function(){
           $("#slideshow > .img").attr("src",imageArr[i]);
           $("#slideshow > .img").fadeTo(200,1);
        }, 200);
    }

    var imgsrc;
    var interval = setInterval(next, 4000);


    $(".arrows").hover( function(){
        clearInterval(interval);
    }, function(){
        interval = setInterval(next, 4000);
    });

    $("#prev").on("click", function(){
         if(i > 0){
            i--;
        }else{
            i = imageArr.length-1;
        }

        $("#slideshow > .img").fadeTo(200, 0.5);
        setTimeout(function(){
           $("#slideshow > .img").attr("src",imageArr[i]);
           $("#slideshow > .img").fadeTo(200,1);
        }, 200);
    });

    $("#next").on("click", function(){
        if(i < imageArr.length-1){
            i++;
        }else{
            i = 0;
        }

        $("#slideshow > .img").fadeTo(200, 0.5);
        setTimeout(function(){
           $("#slideshow > .img").attr("src",imageArr[i]);
           $("#slideshow > .img").fadeTo(200,1);
        }, 200);
    });

    $("#img-nav").hover(function(){

        clearInterval(interval);
        $("#img-nav").fadeTo(200, 0.7);

    }, function(){

        interval = setInterval(next, 4000);
        $("#img-nav").fadeTo(200, 0);

    });

     $("#img-nav > img").hover(function(){

        $(this).addClass("animated pulse");
        imgsrc = $(this).attr("src");
        flag=1;

        $("#slideshow > .img").fadeTo(200, 0.5);
        setTimeout(function(){
           $("#slideshow > .img").attr("src", imgsrc);
           $("#slideshow > .img").fadeTo(200,1);
        }, 200);

    }, function(){
        $(this).removeClass("animated pulse");
    });

});
