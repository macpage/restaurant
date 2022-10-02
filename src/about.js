



function createAbout(){
    const mainExists = document.querySelector(".about");
    if(!mainExists){
        const about = document.createElement("main");
        about.classList.add("about");
        about.style.display = "none";
        const headline = document.createElement("h2");
        headline.innerHTML = "About";
        const aboutContent = document.createElement("div");
        aboutContent.classList.add("about-content");
        const text = document.createElement("p");
        text.innerHTML = "Hi I like Thicc Bubble Teas :)" + "<br />" + "I want to make really big money with bubble tea, so I created this store. <br /> <br /> We are working on the Princess Boba right now, <br /> it will be available next week. <br /> I hope you guys will like it! <3 <br /> <br /> <br /> <br />  <br /> <br />    Founder & CEO, <br />  Mac" ;
        const pic = document.createElement("img");
        pic.src = "../src/pic/princess.png"

        const content = document.querySelector(".content");
        
        content.insertBefore(about,document.querySelector("footer"))
        about.appendChild(headline);
        about.appendChild(aboutContent);
        aboutContent.appendChild(text);
        aboutContent.appendChild(pic);
    }else{

    }
}





function about(){
    createAbout();
}

 export default  about;
 