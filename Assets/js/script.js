 
setInterval(updateActiveElt,3000);

let elements=document.getElementsByClassName('item');
let activeElement=0;

function updateActiveElt(){
    elements[activeElement].classList.remove('active');
    activeElement++;
    if(activeElement >= elements.length){
        activeElement=0;
    }
    elements[activeElement].classList.add('active')

}


/* menu hambourger */
const menuHamburger = document.querySelector(".menuAmbr")
const navlinks = document.querySelector(".navlink")
menuHamburger.addEventListener('click',()=>{navlinks.classList.toggle("mobileMenu")}) 
 
 
 
 /* carroussel miniature */
let currentIndex = 0;
const images = ['Assets/img_voiture_et_moto/7.jpg', 'Assets/img_voiture_et_moto/77.jpg', 'Assets/img_voiture_et_moto/777.jpg', 'Assets/img_voiture_et_moto/7777.jpg'];
const totalImages = images.length;

// Fonction pour changer l'image principale
function updateMainImage(image) {
    document.getElementById('main-image').src = image;
}

// Fonction pour changer l'image avec les flèches
function changeImage(direction) {
    currentIndex += direction;

    // S'assurer que l'index reste dans les limites
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Mettre à jour l'image principale
    updateMainImage(images[currentIndex]);
    updateImageCounter();
}
// Fonction pour mettre à jour le compteur d'images
function updateImageCounter() {
    document.getElementById('image-counter').textContent = `currentIndex + 1 /{totalImages}`;
}
// Initialiser le compteur d'images au début
updateImageCounter();

 

 




