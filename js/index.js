const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//My code start here
let navItems = document.querySelectorAll('nav a');
navItems.forEach((item, i=1) => {
 item.textContent = siteContent.nav[`nav-item-${i}`];
})

//Task 3:
 navItems.forEach((item) => item.style.color = 'green');

let home = document.createElement("a");
home.textContent = "Home";
home.style.color = "green";

let contact = document.createElement("a");
contact.textContent = "Contact";
contact.style.color = "green";

let nav = document.querySelector('nav')
nav.prepend(home);
nav.appendChild(contact);


//Cta
let title = document.querySelector(".cta h1");
let btn = document.querySelector(".cta button");
let ctaImg = document.querySelector(".cta img");

title.textContent = siteContent.cta.h1;
btn.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

 title.style.width = "240px";

//Middle
let midheadings = document.querySelectorAll(".text-content h4");
let midtext = document.querySelectorAll(".text-content p");
let midImg = document.querySelector(".middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Middle heading
midheadings[0].textContent = siteContent["main-content"]["features-h4"];
midheadings[1].textContent = siteContent["main-content"]["about-h4"];
midheadings[2].textContent = siteContent["main-content"]["services-h4"];
midheadings[3].textContent = siteContent["main-content"]["product-h4"];
midheadings[4].textContent = siteContent["main-content"]["vision-h4"];

//Middle text
midtext[0].textContent = siteContent["main-content"]["features-content"];
midtext[1].textContent = siteContent["main-content"]["about-content"];
midtext[2].textContent = siteContent["main-content"]["services-content"];
midtext[3].textContent = siteContent["main-content"]["product-content"];
midtext[4].textContent = siteContent["main-content"]["vision-content"];


//Stretch
midheadings.forEach((item)=> item.style.color = 'green');
title.style.color = 'seagreen';


contHead = document.querySelector(".contact h4");
contText = document.querySelectorAll(".contact p");

contHead.textContent = siteContent.contact["contact-h4"];

contText[0].textContent = siteContent.contact.address;
contText[1].textContent = siteContent.contact.phone;
contText[2].textContent = siteContent.contact.email;

contHead.style.color = 'green';

//Footer
document.querySelector("footer p").textContent = siteContent.footer.copyright;



