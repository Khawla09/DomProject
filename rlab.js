import "./rlab.css";
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList = "flex-ctr";
// const  = '<nav id="top-menu">';
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList = "flex-around";
for (let i = 0; i < menuLinks.length; i++) {
  const obj = menuLinks[i];
  const anchor = document.createElement("a");
  anchor.href = obj.href;
  anchor.innerText = obj.text;
  topMenuEl.appendChild(anchor);
}
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
function buildSubmenu(sublinksArr) {
  subMenuEl.innerHTML = "";

  for (let i = 0; i < sublinksArr.length; i++) {
    const myObj = sublinksArr[i];
    const a = document.createElement("a");
    a.href = myObj.href;
    a.textContent = myObj.text;
    subMenuEl.appendChild(a);
  }
}

//link of top menu
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);
//to make submenu dispaear after clicking it again
let submenuVisible = false;
//click event Listener
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.matches("a")) {
    return;
  }
  for (let link of topMenuLinks) {
    link.classList.remove("active");
  }
  //this targets our link and get its text withouts white spaces
  const linkText = e.target.textContent.trim();
  //find index of menuLinks from the text of our link using finIndex Meth
  const index = menuLinks.findIndex((link) => link.text === linkText);
  console.log(index);
  //object in menulinks of my topMenuLinks
  const linkObj = menuLinks[index];

  //check if objLink has sublinks prop
  if (linkObj.hasOwnProperty("subLinks")) {
    buildSubmenu(linkObj.subLinks);
    if (!submenuVisible) {
      subMenuEl.style.top = "100%";
      submenuVisible = true;
    } else {
      subMenuEl.style.top = "0";
      submenuVisible = false;
    }

    // console.log(true);
  } else {
    subMenuEl.style.top = "0";
    submenuVisible = false;
  }
  ////////////////////////
  //calling sublinks
  // console.log(linkObj.subLinks);

  e.target.classList.toggle("active");
  console.log(e.target.textContent);
});

// console.log(`content : ${event.target.innerHTML}`);
