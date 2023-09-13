let arr = [
 {
    text:"Bosh sahifa",
    href:"#"
 },
 {
    text: "Xizmatlar",
    href:"#"
 },
 {
    text:"Portfolio",
    href:"#"
 },
 {
    text: "Jamoa",
    href:"#"
 },
 {
    text: "Blog",
    href:"#"
 },
 {
    text: "Kontaktlar",
    href:"#"
 },
 {
    text: "+998 90 921 37 11",
    href:"#"
 }
];
 
const ulEl=document.getElementsByClassName("list")

console.log(ulEl);


function createList(){
    let fragment = new DocumentFragment()

    arr.forEach((item,index)=>{
        let liEl=document.createElement("li")
            let aEl=document.createElement("a")
            aEl.textContent=item.text
            aEl.setAttribute("href",item.href)
            liEl.appendChild(aEl)
            fragment.appendChild(liEl)
           
            if(index == arr.length - 1){
                liEl.setAttribute("class","number")
                aEl.setAttribute("class","number__nav")
            }
    })
        return fragment
         
}
  
ulEl[0].appendChild(createList())
ulEl[1].appendChild(createList())



function toggleMenu(arg){
   const menu = document.querySelector(".mobile-menu-wrapper");
   const open = document.getElementById("open");
   const close = document.getElementById("close");
   if(arg == "open"){
      menu.classList.add("open")
      open.style.display = "none";
      close.style.display = "block";

   }else if( arg == "close"){
      menu.classList.remove("open")
      close.style.display = "none";
      open.style.display = "block";
   }
}
const close = document.getElementById("close");
close.style.display = "none";