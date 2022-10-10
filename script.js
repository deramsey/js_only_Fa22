var top_header = document.createElement("header");
var site_title = document.createElement("h1");

var title_text = document.createTextNode("JS Only Site!");
site_title.appendChild(title_text);
top_header.appendChild(site_title);
document.body.appendChild(top_header);

var main = document.createElement("main");
var main_title = document.createElement("h2");
var main_paragraph = document.createElement("p");
var main_paragraph2 = document.createElement("p");
var main_title_text = document.createTextNode("This is the H2 Text!");
var mp_text = document.createTextNode("This is paragraph 1.");
var mp_text2 = document.createTextNode("This is paragraph 2.");

main_title.appendChild(main_title_text);
main_paragraph.appendChild(mp_text);
main_paragraph2.appendChild(mp_text2);

main.appendChild(main_title);
main.appendChild(main_paragraph);
main.appendChild(main_paragraph2);
document.body.appendChild(main);

var footer = document.createElement("footer");
document.body.appendChild(footer);


top_header.style.minHeight = "10vh";
top_header.style.backgroundColor = "hsl(120, 70%, 40%)";
site_title.style.marginTop = "0";
site_title.style.fontSize = "6vw";
site_title.style.textAlign = "center";

main.style.width = "70%";
main.style.margin = "0 auto";
main.style.backgroundColor = "white";
main.style.minHeight = "60vh";
main.style.padding = "1.3rem";
main_title.style.fontSize = "2.4rem";

document.body.style.backgroundColor = "hsl(300, 70%, 40%)";
document.body.style.fontFamily = "sans-serif";
document.body.style.boxSizing = "border-box";
document.body.style.margin = "0";

footer.style.minHeight = "10vh";
footer.style.backgroundColor = "hsl(120, 70%, 40%)";