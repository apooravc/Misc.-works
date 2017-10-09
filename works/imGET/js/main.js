function search(){

    var input, filterString, ulist, litem, img;
    input = document.getElementById("search-box");
    filterString = input.value.toLowerCase();

    for(var i = 0; i < 4; i++){

        ulist = document.getElementsByTagName("ul")[i];
        litem = ulist.getElementsByTagName("li");
        for (var j = 0; j < litem.length; j++) {
            img = litem[j].getElementsByTagName("img")[0];
            if (img.alt.indexOf(filterString) > -1) {
                litem[j].style.display = "";
            }
            else {
            litem[j].style.display = "none";
            }
        }
    }

}

$(document).ready(function main(){
    $(".hline").addClass("animated fadeInLeft");
    $(".search > h1").addClass("animated bounce");
    $(".gallery > ul > li").addClass("animated fadeIn");
});
