
// Model
let id = 0;

function createProduct(){
    let products = [];

class product{
    constructor(name,price,info,img){
    this.name = name;
    this.price = price;
    this.info = info;
    this.id = id;
    this.img = img;
    id++;
}
}

products.push(new product("Super Doggy Boba",4.90,"Very niceeee!", "../src/pic/super-doggy-boba.png")); 
products.push(new product("Abooba!",5.90,"Abooba!", "../src/pic/abooba.png"));
products.push(new product("Thicc as Boba", 6.90, "Very thicc!", "../src/pic/thiccboba.png"));
products.push(new product("Gothicc Boba", 6.90, "Dark and thicc!", "../src/pic/gothicc.png"));
products.push(new product("Boba Milkers",4.90,"Very Milky!", "../src/pic/milky.png")); 
products.push(new product("Baddie Boba",5.90,"This a baddie", "../src/pic/baddie.png"));
products.push(new product("Bubble but Boba", 6.90, "Nice bubble boba", "../src/pic/bubble.png"));
products.push(new product("Mommy Bobas", 6.90, "Mommy? Boba!", "../src/pic/mommy.png"));
return products;
}




// View
function createMenu(){
    // Checkt ob menu Element existiert damit nur eins erstellt wird falls nicht.
   const mainExists = document.querySelector(".menu");
    if(!mainExists){
        const main = document.createElement("main");
        const content = document.querySelector(".content");
         main.classList.add("menu");
        content.insertBefore(main,document.querySelector("footer"))

        createContent();
    } else{
        mainExists.style.display = "grid";
       
    }
}

function createContent(){
    const menu = document.querySelector(".menu");
    menu.style.display = "none";
    const content = document.createElement("div");
    content.classList.add("menu-content");
    const headline = document.createElement("h2");
    const bobaMenu = document.createElement("div");
    bobaMenu.classList.add("boba-menu");

    headline.innerHTML = "Our Big Boba's"
    
    content.appendChild(headline);
    content.appendChild(bobaMenu);
    
    menu.appendChild(content);
    
    function createBobas(){
        
        for(let i = 0; i<8;i++){
            const boba = document.createElement("div");
            boba.classList.add("boba-background");
            const img = document.createElement("img");
            const name = document.createElement("p");
            const price = document.createElement("p");
            const info = document.createElement("p");

            img.src = createProduct()[i].img;
            name.innerHTML = ("Name: ").bold() + createProduct()[i].name;
            price.innerHTML = ("Price: ").bold() + createProduct()[i].price + " €";
            info.innerHTML = ("Info: ").bold() + `"${createProduct()[i].info}"`;

            bobaMenu.appendChild(boba);
            boba.appendChild(img);
            boba.appendChild(name);
            boba.appendChild(price);
            boba.appendChild(info);
        }
    }

    createBobas();
}
// Controller
function menu(){
    createMenu();
}

 export default  menu;
 