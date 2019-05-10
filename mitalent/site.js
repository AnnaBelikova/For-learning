let pntContainer = document.querySelectorAll(".photo-points__point")
for (let i = 0; i < pntContainer.length; i++) {
    pntContainer[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}

let galpntContainer = document.querySelectorAll(".points-gallery__point");
for (let j = 0; j < galpntContainer.length; j++) {
    galpntContainer[j].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[3].className = current[3].className.replace(" active", "");
    this.className += " active";
  });
}

let profpntContainer = document.querySelectorAll(".menu-profile__point");
for (let j = 0; j < profpntContainer.length; j++) {
    profpntContainer [j].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[2].className = current[2].className.replace(" active", "");
    this.className += " active";
  });
}

let sldpgsContainer = document.querySelectorAll(".slider-pages__page");
for (let j = 0; j < sldpgsContainer.length; j++) {
    sldpgsContainer [j].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



const slides =[
    {id:1, name: 'Derek Anderson', job:'BRITISH COMEDIAN', video:'some src',title:'ENQUIRE ABOUT DEREK', pages:'01'},
    {id:2, name: 'Sarah Anderson', job:'ENGINEER', video:'some src',title:'ENQUIRE ABOUT SARAH', pages:'02'},
    {id:3, name: 'Jimmy Anderson', job:'JUDGE', video:'some src',title:'ENQUIRE ABOUT JIMMY', pages:'03'},
    {id:4, name: 'Hovard Anderson', job:'LAYER', video:'some src',title:'ENQUIRE ABOUT HOVARD', pages:'04'}
];
let currentSlide = 0;
const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');


function doSlide(direction){
    currentSlide += direction;
    this.className += " active";
    document.querySelector('h1').innerText = slides[currentSlide].name;
    document.querySelector('.person-job').innerText = slides[currentSlide].job;
    document.querySelector('.slide-title').innerText = slides[currentSlide].title;

    if (currentSlide === 0){
        leftArrowElement.classList.add('disabled');
    }else{
        leftArrowElement.classList.remove('disabled');
    }
}
leftArrowElement.addEventListener('click',function () {doSlide(-1)});
leftArrowElement.addEventListener('click',function () {doSlide(1)});




