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
    "h1": "DOM \n Is \n Awesome",
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
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
let sheet = document.styleSheets[0];
//console.log(sheet);
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circleImg = document.getElementById("cta-img");
circleImg.setAttribute('src', siteContent.cta["img-src"]);

let rectangleImg = document.getElementById("middle-img");
rectangleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// let anchorList = document.getElementsByTagName("a");
// //console.log(anchorList);
// anchorList[0].textContent = siteContent["nav"]["nav-item-1"];
// anchorList[1].textContent = siteContent["nav"]["nav-item-2"];
// anchorList[2].textContent = siteContent["nav"]["nav-item-3"];
// anchorList[3].textContent = siteContent["nav"]["nav-item-4"];
// anchorList[4].textContent = siteContent["nav"]["nav-item-5"];
// anchorList[5].textContent = siteContent["nav"]["nav-item-6"];
// anchorList[0].style.color = "green";
// anchorList[1].style.color = "green";
// anchorList[2].style.color = "green";
// anchorList[3].style.color = "green";
// anchorList[4].style.color = "green";
// anchorList[5].style.color = "green";

const headSpot = document.querySelector("h1");
//console.log(typeof headSpot);
headSpot.textContent = siteContent.cta["h1"];
headSpot.style.whiteSpace = "pre";
//headSpot.style.columnCount = 3;
//sheet.insertRule("h1 {word-spacing: <parent-width>}");
const butt = document.querySelector("button");
butt.textContent = siteContent["cta"]["button"];
//console.log(typeof null);
const H4s = document.querySelectorAll("h4");
H4s[0].textContent = "Features";
H4s[1].textContent = "About";
H4s[2].textContent = "Services";
H4s[3].textContent = "Product";
H4s[4].textContent = "Vision";
H4s[5].textContent = "Contact";

const pars = document.querySelectorAll("p");
pars[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[2].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[3].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[4].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pars[5].textContent = "123 Way 456 Street \n Somewhere, USA";
pars[5].style.whiteSpace = "pre";
pars[6].textContent = "1 (888) 888-8888";
pars[7].textContent = "sales@greatidea.io";
pars[8].textContent = "Copyright Great Idea! 2018";


// NODE LIST EXAMPLE HOWWWWW!!???
let anchorList = document.querySelectorAll('a');
console.log(anchorList);
anchorList.forEach((element, i) => {
  element.textContent = siteContent["nav"][`nav-item-${i+1}`];
});

var parent = anchorList[0];
var newTag = document.createElement("a");
newTag.setAttribute('href', "nba.com");
newTag.innerText = "TAG ONE    ";
parent.prepend(newTag);

var parent2 = anchorList[anchorList.length-1];
var newTag2 = document.createElement("a");
newTag2.setAttribute('href', "nba.com");
newTag2.innerText = "TAG TWO";
parent2.append(newTag2);

