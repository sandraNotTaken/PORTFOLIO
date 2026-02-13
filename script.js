const tiltCards = document.querySelectorAll(".tilt");
const reveals = document.querySelectorAll(".reveal");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

tiltCards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = ((y - centerY) / centerY) * -10;
const rotateY = ((x - centerX) / centerX) * 10;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {
card.style.transform = "rotateX(0) rotateY(0)";
});

});

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

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
