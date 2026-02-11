function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(top < screenHeight - 100){
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});
