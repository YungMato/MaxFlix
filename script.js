var projectsAr = [];

var project = {};

project = 
{
    name: "Password-Manager",
    match: "96% Match",
    date: "2021",
    descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
    img: "/img/exampleProject.PNG",
    tags:["C# ","WPF ","Encrypting ","Tag4 "]
}

projectsAr.push(project);

project = 
{
    name: "Password-Manager NR2",
    match: "96% Match",
    date: "2021",
    descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
    img: "/img/exampleProject2.PNG",
    tags:["C# ","WPF ","Encrypting ","Tag4 "]
}

projectsAr.push(project);

project = 
{
    name: "Password-Manager NR3",
    match: "96% Match",
    date: "2021",
    descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
    img: "/img/exampleProject3.PNG",
    tags:["C# ","WPF ","Encrypting ","Tag4 "]
}

projectsAr.push(project);

project = 
{
    name: "Password-Manager NR4",
    match: "96% Match",
    date: "2021",
    descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
    img: "/img/exampleProject4.PNG",
    tags:["C# ","WPF ","Encrypting ","Tag4 "]
}

projectsAr.push(project);

$( document ).ready(function() {
    
    loadProjects();

    $(".card").on("click", (card) => {
        highlightItem(card.target);
    });

});

function loadProjects(){

    var cardAr = $(".card");

    for(var i = 0; i < 4; i++){

        var cardImg = $("<img src='" + projectsAr[i].img + "'>");
        cardImg.attr("value",i);
        cardAr[i].append(cardImg[0]);

    }
}

function highlightItem(card){
    $(".highlight").attr("id","highlight");
    
    $("#highlightTitle")[0].innerHTML = projectsAr[card.value].name;
    $("#highlightInfo")[0].innerHTML = projectsAr[0].descr;
    $("#highlightImg")[0].src = projectsAr[0].img;

    for(var i = 0; i < projectsAr[0].tags.length; i++){

        var tag = $("<p>").attr("class","highlightTag").text(projectsAr[0].tags[i]);

        $("#highlightTags").append(tag);
    }
    
}