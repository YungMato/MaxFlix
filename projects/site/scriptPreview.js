$( document ).ready(function() {

    setUpButtons();
});

function setUpButtons(){

    var projectSrc = checkSrc($("#bigImg").attr("src"));


    $(".previewPic").on("click", function(){
        $(".previewPic").removeClass("active");

        $(this).addClass("active");

        switch (checkImgNumber($(this).attr("src"))) {
            case "1":
                $("#bigImg").attr("src", projectSrc + "1.png");
                break;
            case "2":
                $("#bigImg").attr("src", projectSrc + "2.png");
                break;
            case "3":
                $("#bigImg").attr("src", projectSrc + "3.png");
                break;
        
            default:
                break;
        }
    });
}

function checkSrc(src){
    return src.substring(0, src.length - 5);
}

function checkImgNumber(src){
    return src.substring(16,17);
}