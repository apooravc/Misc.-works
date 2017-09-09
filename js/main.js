$(document).ready(function(){
    $(".element").hide();
    $("#1").show().addClass("animated fadeInDownBig");
    setTimeout(function(){
        $("#2").show().addClass("animated fadeInDownBig");
    }, 1000);
    setTimeout(function(){
        $("#3").show().addClass("animated fadeInDownBig");
    }, 2000);
});
