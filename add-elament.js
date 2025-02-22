
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

var banner2 = document.createElement("h1");
var addtext2 = document.createTextNode("add elemeint");
banner2.appendChild(addtext2);
var addDiv1 = document.getElementById("div2");
addDiv1.appendChild(banner2);
