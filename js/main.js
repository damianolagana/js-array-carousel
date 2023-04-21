// VARIABILI

const images = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

let currentImgIndex = 0;

// LANCIO SCRIPT
const carouselContainer = document.getElementById("carouselBox");

for (i = 0; i < images.length; i++){
    const slides = images[i];
    const Img = document.createElement("img");
    Img.src = slides;

    if(i === 0){
        Img.classList.add("visible")
    }
    
    carouselContainer.append(Img)

 
   
}

const slideImages= document.getElementsByTagName("img")
// EVENTI

const btnNext = document.querySelector(".btnNext");

btnNext.addEventListener("click", function(){
    if(currentImgIndex < 5) {
        for(let c = 0; c < slideImages.length; c++){
          const slide = slideImages[c];
          console.log(currentImgIndex)
          
          if(c == currentImgIndex){
            slide.classList.add("visible");
          } else {
            slide.classList.remove("visible")
          }
          
        }

        currentImgIndex++;
    } else  {
        currentImgIndex = 0;
    }
})




