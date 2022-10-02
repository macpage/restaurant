import menu from "./menu"
import about from "./about"

const content = document.querySelector(".content");
// Model
function createProduct(){
    const products = [];
let id = 0;
class product {
    constructor(name,price,info,img){
        this.name = name;
        this.price = price;
        this.info = info;
        this.img = img;
        this.id = id;
        id++;
    }
}

products.push(new product("Super Doggy Boba",4.90,"Very niceeee!", "../src/pic/super-doggy-boba.png"))
products.push(new product("Abooba!",5.90,"Abooba!", "../src/pic/abooba.png"))
products.push(new product("Thicc as Boba", 6.90, "Very thicc!", "../src/pic/thiccboba.png"))
return products;
}

// View
function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const headline = document.createElement("h1");
    headline.innerHTML = "Big Bobas"

    const navbar = document.createElement("div");
    navbar.classList.add("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("homeButton");
    const menuButton = document.createElement("button");
    menuButton.classList.add("menuButton");
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("aboutButton");

    homeButton.innerHTML = "Home";
    menuButton.innerHTML = "Menu";
    aboutButton.innerHTML = "About";

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(aboutButton);
    header.appendChild(headline);
    header.appendChild(navbar);
    content.appendChild(header);
}


function createMain(){
    const main = document.createElement("main");   
    main.classList.add("home");
    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");

    const headline = document.createElement("h2");
    headline.innerHTML = "Welcome to Big Bobas!"
    headline.style.fontSize = "32px";

    const headtext = document.createElement("h3");
    headtext.innerHTML = "We got some new Boba's, come and try them!"

    const startProducts = document.createElement("div");
    startProducts.classList.add("start-products");

    let productArr = [1,2,3];
    productArr.forEach((e,i)=> {
        e = document.createElement("div");
        e.classList.add("product");
        const pic = document.createElement("img");
        pic.src = createProduct()[i].img;
        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.innerHTML = ("Name: ").bold() + createProduct()[i].name;
        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.innerHTML = ("Price: ").bold() + createProduct()[i].price + " €";
        const productInfo = document.createElement("p");
        productInfo.classList.add("product-info");
        productInfo.innerHTML = ("Info: ").bold() + `"${createProduct()[i].info}"`;
        

        e.appendChild(pic);
        e.appendChild(productName);
        e.appendChild(productPrice);
        e.appendChild(productInfo);
        startProducts.appendChild(e);
    })

    mainContent.appendChild(startProducts);
    main.appendChild(headline);
    main.appendChild(headtext);
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
function changeToMenu(){
    const menuButton = document.querySelector(".menuButton")
    menuButton.addEventListener("click", ()=>{
        const home = document.querySelector(".home");
       home.style.display = "none";
       const about = document.querySelector(".about");
       about.style.display = "none";
        const menu = document.querySelector(".menu");
        menu.style.display = "block";
    })
}

function chanteToabout(){
    const aboutButton = document.querySelector(".aboutButton");
    aboutButton.addEventListener("click", ()=>{
        const home = document.querySelector(".home");
        home.style.display = "none";
        const menu = document.querySelector(".menu");
        menu.style.display = "none";
        
         const about = document.querySelector(".about");
         about.style.display = "block";
    })
}

function changeToHome(){
    const homeButton = document.querySelector(".homeButton");
   homeButton.addEventListener("click",() => {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const about = document.querySelector(".about");
    about.style.display = "none";
    menu.style.display = "none";
    home.style.display = "grid";
   })
}
changeToMenu();
changeToHome();
chanteToabout();

menu();
about();