
// crating html elamint

// Elamint tage create
var heading = document.createElement("h1");

// Element a text lagino holo
var text = document.createTextNode("this is headin");

// Element ar text ka ;jukto + kora holo
heading.appendChild(text);


var Mydiv = document.getElementById("div");
Mydiv.appendChild(heading)

var heading2 = document.createElement("h1");
var addText = document.createTextNode("my naime is jakaria");
heading2.appendChild(addText);

var div1 = document.getElementById("div");
div1.appendChild(heading2);


var banner = document.createElement("p");
var adtext = document.createTextNode("no Elaminr");

banner.appendChild(adtext);
var addDiv = document.getElementById("div2");

addDiv.appendChild(banner);


var heading4 = document.createElement("h1");
var textadd = document.createTextNode("Name:jakaria jomaddar");
heading4.appendChild(textadd);

var addAdiv2 = document.getElementById("no");
addAdiv2.appendChild(textadd);

var headin5 = document.getElementsByTagName("h1")[1];

no.removeChild("headin5")



for(var y = 0;y<=20; y++){
    var number = document.createElement("h1");
    var addnumber = document.createTextNode("my name :is jakaria");
    number.appendChild(addnumber);

    var divno = document.getElementById("no");
    divno.appendChild(addnumber);

}

var photo = ["img1/4.jpg", "img1/2.jpg", "img1/3.jpg"];
var tigphoto = document.querySelector("img1");

var count = 0;

function Next (){
    count++;

    if (count >= photo.length){
        count = 0;
    }

    tigphoto.src = photo[count]
    
}



// var banner2 = document.createElement("h1");
// var addtext2 = document.createTextNode("add elemeint");
// banner2.appendChild(addtext2);
// var addDiv1 = document.getElementById("div2");
// addtext2.appendChild(banner2);
