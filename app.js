const btnNavT1 = document.querySelector(".btnNavT1");
const navT1 = document.querySelector(".navForTelephoneT1");
const container11 = document.querySelector(".container11");
const nav = document.querySelector(".navigation");
const footer = document.querySelector(".footer");
let count = 0;

function ekran(){
 container11.style.height = window.innerHeight - nav.offsetHeight - 10 + "px";
if(window.innerWidth > 708){
count = 0;
navT1.style.display = "none";
}
 }
 ekran();
 window.addEventListener("resize", ekran);
btnNavT1.onclick = function(){
count = count + 1;
if(count === 1){
navT1.style.display = "block";
}
else if(count === 2){
count = 0;
navT1.style.display = "none";
}
}
