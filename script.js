const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("abajo", window.scrollY>0)
})
