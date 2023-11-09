let arr = [
  { text: "Home", href: "#" },
  { text: "About", href: "#" },
  { text: "Service", href: "#" },
  { text: "New Property", href: "#" },
  { text: "Contact", href: "#" },
];

const ulEl = document.getElementById("list");
arr.forEach((item, index) => {
  let liEl = document.createElement("li");
  let aEl = document.createElement("a");
  aEl.textContent = item.text;
  aEl.setAttribute("href", item.href);
  liEl.appendChild(aEl);
  ulEl.appendChild(liEl)
});
