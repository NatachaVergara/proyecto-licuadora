let navbar = document.querySelector(".navbar")

console.log(navbar)

let menuButton = document.getElementById("menu")

menuButton.addEventListener('click', () => {
    
    navbar.classList.toggle('active');

} )