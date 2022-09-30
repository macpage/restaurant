import order from "./menu"

console.log(order());
const content = document.querySelector(".content");
// Model


// View
function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const headline = document.createElement("h1");
    headline.innerHTML = "Big Bobas"
    const navbar = document.createElement("div");


    header.appendChild(headline);
    header.appendChild(navbar);
    content.appendChild(header);
}


function createMain(){
    const main = document.createElement("main");
    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");

    main.appendChild(mainContent);
    content.appendChild(main);
}


function createFooter(){
    const footer = document.createElement("footer");
    const text = document.createElement("p");
    text.innerHTML = "Copyright by Me 2022";

    footer.appendChild(text);
    content.appendChild(footer);
}


createHeader();
createMain();
createFooter();
// Controll