// VARIABILI

const images = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]



// LANCIO SCRIPT
const carouselContainer = document.getElementById("carouselBox");

for (i = 0; i < images.length; i++){
    const slides = images[i];
    const Img = `<img src="${slides}" />`;
    
    carouselContainer.innerHTML += Img;
    
}