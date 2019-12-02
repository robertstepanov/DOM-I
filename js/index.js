const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//  --------------   Tasks 1 and 2   ----------->

//  --------------   Header/Navigation  ------------------>
const navSelection = document.querySelectorAll("a");
navSelection[0].textContent = siteContent["nav"]["nav-item-1"];
navSelection[1].textContent = siteContent["nav"]["nav-item-2"];
navSelection[2].textContent = siteContent["nav"]["nav-item-3"];
navSelection[3].textContent = siteContent["nav"]["nav-item-4"];
navSelection[4].textContent = siteContent["nav"]["nav-item-5"];
navSelection[5].textContent = siteContent["nav"]["nav-item-6"];

//  --------------  CTA Section   ------------------>

let ctaHeading = document.querySelector("h1");
ctaHeading.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let header_img = document.getElementById("cta-img");
header_img.setAttribute("src", siteContent["cta"]["img-src"]);

//  --------------   Top Section  ------------------>

let topContent_titles = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
);
topContent_titles[0].textContent = siteContent["main-content"]["features-h4"];
topContent_titles[1].textContent = siteContent["main-content"]["about-h4"];

const topContent = document.querySelectorAll(
  ".main-content .top-content .text-content p"
);

topContent[0].textContent = siteContent["main-content"]["features-content"];

topContent[1].textContent = siteContent["main-content"]["about-content"];

//  --------------   Middle Image   ------------------>
let middle_img = document.getElementById("middle-img");
middle_img.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//  --------------  Stretch - New Button to change BG color  ------------->

const newButton = document.createElement("button");

newButton.textContent = "Change BG Color";

newButton.classList.add("button");

const buttonParent = document.querySelector(".cta-text");
buttonParent.append(newButton);

const bg = (document.body.style.background = "white");
let isColored = false;
newButton.addEventListener("click", function() {
  if (isColored) {
    document.body.style.background = "white";
    isColored = false;
  } else {
    document.body.style.background = "lightblue";
    isColored = true;
  }
});

//  --------------   Bottom Section   ------------------>

let bottomContent_titles = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
);
bottomContent_titles[0].textContent =
  siteContent["main-content"]["services-h4"];
bottomContent_titles[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent_titles[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContent = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
);

bottomContent[0].textContent = siteContent["main-content"]["services-content"];

bottomContent[1].textContent = siteContent["main-content"]["product-content"];

bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

//  --------------   Contact Section   ------------------>
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

const contact_p = document.querySelectorAll(".contact p");
contact_p[0].textContent = siteContent["contact"]["address"];
contact_p[1].textContent = siteContent["contact"]["phone"];
contact_p[2].textContent = siteContent["contact"]["email"];

//  --------------   Footer   ------------------>
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

//  -------------- Task 3  --------------------->

//  --------------  Create 2 new Nav Links  ----------->

const blogNav = document.createElement("a");

blogNav.textContent = "Blog";

const blogParent = document.querySelector("nav");
blogParent.append(blogNav);

const galleryNav = document.createElement("a");

galleryNav.textContent = "Gallery";

const galleryParent = document.querySelector("nav");
galleryParent.prepend(galleryNav);

//  ---------------   Change Nav Link Color  ---------->

const navColor = document.querySelectorAll("a");
navColor.forEach(element => {
  element.style.color = "green";
});
