// SLOTS FOR THE PROJECTS

var projectsAr = [
    {
        name: "Password-Manager",
        match: "96% Match",
        date: "2021",
        descr: "This was my first WPF-Project. This is a Desktop Application for storing your Passwords. This program generates random passwords, encrypts them and saves them in a local file. When needed, it decrypts them and and displays it in the program.",
        img: "/projects/img/project0_1.png",
        tags:["C#","WPF",".NET","JSON","Encrypting"]
    },
    {
        name: "MTG Planechase",
        match: "97% Match",
        date: "2024",
        descr: "This is a Web-App for the trading-card game Magic: The Gathering. It includes all playcards for the playmode Planechase, all gathered from the Magic API. This App is optimized for a Tablet, but works on other Devices too.",
        img: "/projects/img/project1_1.PNG",
        tags:["Javascript","HTML","CSS","Jquery","API","Web-App"]
    },    
    {
        name: "AD: Tired of just LOOKING at projects?",
        match: "101% Match",
        date: "for your company",
        descr: "Contact me and WORK on a project together! If you are interested in more, click on the profile-picture in the top right corner.",
        img: "/projects/img/ad.PNG",
        tags:["Open for work","Web-Development","Software-Engineering"]
    },
    {
        name: "Blobby Feeder",
        match: "81% Match",
        date: "2023",
        descr: "In this little Minigame was made in Unity. It is a simple labyrinth game, like the good old flash games back in the days. You try to navigate your little Blobby to his food, but beware of the danger that is waiting on you on the way",
        img: "/projects/img/project3_1.PNG",
        tags:["Unity","Game Engine","C#", "GameDev"]
    },
    {
        name: "Landing Page: TinDog",
        match: "89% Match",
        date: "2021",
        descr: "Trying to connect people with lovely dogs, TinDog is the Number one Pet Shipment in the World. Note: This is a mockup landing page",
        img: "/projects/img/project4_1.PNG",
        tags:["HTML","CSS","Javascript","Jquery","WebDev"]
    },
    {
        name: "Simon Says",
        match: "93% Match",
        date: "2022",
        descr: "My first steps in 'Game-Development'. A simple Simon says game based on CSS and Javascript.",
        img: "/projects/img/project5_1.PNG",
        tags:["HTML","CSS","Javascript","Jquery","WebDev"]
    },    
    {
        name: "Password-Manager NR3",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/projects/img/exampleProject7.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/projects/img/exampleProject8.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4","Movie","TROLOLOL"]
    },    {
        name: "Password-Manager",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/projects/img/exampleProject9.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/projects/img/exampleProject10.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },    
    {
        name: "Password-Manager NR3",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/projects/img/exampleProject11.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/projects/img/exampleProject12.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    } 
];


$( document ).ready(function() {
    
    loadProjects();
    setUpEvents();


});

function setUpEvents(){

    $(".card").on("click", function(event) {
        highlightItem($(event)[0].target.attributes.value.nodeValue);
    });

    $("#bigLogo").on("click", function() {
        window.location.href = "index.html";
    });

    $("#profileImg").on("click", function() {
        window.location.href = "profile.html";
    });

}

function loadProjects(){
    //select all cards on the pages and load in the project-images of the Project-Array

    var cardAr = $(".card");

    for(var i = 0; i < cardAr.length; i++){

        var cardImg = $("<a href='#websiteWrapper'><img src='" + projectsAr[i].img + "' value='" + i +"'></a>");
        cardAr[i].append(cardImg[0]);

    }
}


function highlightItem(cardId){


    // Fill in the information in the Highlightcard with the data from the clicked Card
    $(".highlight").attr("id","highlight");

    $("#highlightTitle")[0].innerHTML = projectsAr[cardId].name;
    $("#highlightMatch")[0].innerHTML = projectsAr[cardId].match;
    $("#highlightDate")[0].innerHTML = projectsAr[cardId].date;
    $("#highlightInfo")[0].innerHTML = projectsAr[cardId].descr;
    $("#highlightImg")[0].src = projectsAr[cardId].img;




    $("#highlightTags").children().remove();

    for(var i = 0; i < projectsAr[cardId].tags.length; i++){

        var tag = $("<p>").attr("class","highlightTag").text(projectsAr[cardId].tags[i]);

        $("#highlightTags").append(tag);
    }
   

    $("#highlight").prop("onclick", null).off("click");

   if(cardId != 2){
    $("#highlight").on("click", function (){
        window.location.href = "/projects/site/project" + cardId + ".html";
    });
   } 
}