let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);
}

let slideIndex2 = 0;
showSlides2();
function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    
    slides[slideIndex2-1].style.display = "block";  
    setTimeout(showSlides2, 2500);
}

let slideIndex3 = 0;
showSlides3();
function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}    
    
    slides[slideIndex3-1].style.display = "block";  
    setTimeout(showSlides3, 2300);
}