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

//  --------------   Header   ------------------>
const navSelection = document.querySelectorAll("a");
navSelection[0].textContent = "Services";
navSelection[1].textContent = "Products";
navSelection[2].textContent = "Vision";
navSelection[3].textContent = "Features";
navSelection[4].textContent = "About";
navSelection[5].textContent = "Contact";

//  --------------  CTA Section   ------------------>
const cta = document.querySelector(".cta-text h1");
cta.textContent = "DOM Is Awesome";

const btn = document.querySelector(".cta-text button");
btn.textContent = "Get Started";

let header_img = document.getElementById("cta-img");
header_img.setAttribute("src", siteContent["cta"]["img-src"]);

//  --------------   Top Section  ------------------>

let topContent_titles = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
);
topContent_titles[0].textContent = "Features";
topContent_titles[1].textContent = "About";

const topContent = document.querySelectorAll(
  ".main-content .top-content .text-content p"
);

topContent[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

topContent[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//  --------------   Middle Image   ------------------>
let middle_img = document.getElementById("middle-img");
middle_img.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//  --------------   Bottom Section   ------------------>

let bottomContent_titles = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
);
bottomContent_titles[0].textContent = "Services";
bottomContent_titles[1].textContent = "Products";
bottomContent_titles[2].textContent = "Vision";

const bottomContent = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
);

bottomContent[0].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomContent[1].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomContent[2].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//  --------------   Contact Section   ------------------>
const contact = document.querySelector(".contact h4");
contact.textContent = "Contact";

const contact_p = document.querySelectorAll(".contact p");
contact_p[0].textContent = "123 Way 456 Street Somewhere, USA";
contact_p[1].textContent = "1 (888) 888-8888";
contact_p[2].textContent = "sales@greatidea.io";

//  --------------   Footer   ------------------>
const footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018";

//  -------------- Task 3  --------------------->

const navColor = document.querySelectorAll("a");
navColor.forEach(element => {
  element.style.color = "green";
});
