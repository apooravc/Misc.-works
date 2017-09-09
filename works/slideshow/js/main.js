
$(document).ready(function(){

    var imageArr = [ "images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg" ];
    var i = 0;
     function next(){

        if(i < imageArr.length-1){
            i++;
        }else{
            i=0;
        }
        $("#slideshow > img").attr( "src", imageArr[ i ]);
    }
    var interval = setInterval(next, 5000);

    $(".arrows").hover( function(){
        clearInterval(interval);
    }, function(){
        interval = setInterval(next, 5000);
    });

    $("#prev").on("click", function(){
         if(i > 0){
            i--;
        }else{
            i = imageArr.length-1;
        }
        $("#slideshow > img").attr( "src", imageArr[ i ]);
    });

    $("#next").on("click", function(){
        if(i < imageArr.length-1){
            i++;
        }else{
            i = 0;
        }
        $("#slideshow > img").attr( "src", imageArr[ i ]);
    });
});
