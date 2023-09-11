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

