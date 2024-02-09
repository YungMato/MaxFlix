// SLOTS FOR THE PROJECTS

var projectsAr = [
    {
        name: "Password-Manager",
        match: "96% Match",
        date: "2021",
        descr: "This was my first WPF-Project. This is a Desktop Application for storing your Passwords. This program generates random passwords, encrypts them and saves them in a local file. When needed, it decrypts them and and displays it in the program.",
        img: "/img/projectImg/exampleProject.PNG",
        tags:["C#","WPF",".NET","JSON","Encrypting"]
    },
    {
        name: "MTG Planechase",
        match: "97% Match",
        date: "2024",
        descr: "This is a Web-App for the trading-card game Magic: The Gathering. It includes all playcards for the playmode Planechase, all gathered from the Magic API. This App is optimized for a Tablet, but works on other Devices too.",
        img: "/img/projectImg/exampleProject2.PNG",
        tags:["Javascript","HTML","CSS","Jquery","API","Web-App"]
    },    
    {
        name: "Password-Manager NR3",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject3.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject4.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "My first CV",
        match: "81% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject5.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject6.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },    
    {
        name: "Password-Manager NR3",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject7.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject8.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4","Movie","TROLOLOL"]
    },    {
        name: "Password-Manager",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject9.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject10.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },    
    {
        name: "Password-Manager NR3",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject11.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    },
    {
        name: "Password-Manager NR4",
        match: "96% Match",
        date: "2021",
        descr: "Etwas Text damit sich die div ein bisschen mehr füllt und allesa ein bisschen mehr in die Mitte gerückt wird. Hahahahahah ist schon funny wie das hier läuft",
        img: "/img/projectImg/exampleProject12.PNG",
        tags:["C# ","WPF ","Encrypting ","Tag4 "]
    } 
];


$( document ).ready(function() {
    
    loadProjects();

    $(".card").on("click", function(event) {
        highlightItem($(event)[0].target.attributes.value.nodeValue);
    });

});

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
   
    
}