/*let photoPoints = document.querySelectorAll(".photo-points__point")
for (let i = 0; i < photoPoints.length; i++) {
    photoPoints[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}*/

let index=0;
const mockData = [{ "id": 1, "name": "Вася", "job": "QA", "photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" }, { "id": 2, "name": "Петя", "job": "Developer", "photo": "https://pmctvline2.files.wordpress.com/2018/10/game-of-thrones-peter-dinklage-tyrion-death-season-8-interview.jpg?w=620" }, { "id": 3, "name": "Вова", "job": "Senior Developer", "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaeIWOmi62oncorhSKDzoBPIA7mF1QWUqgnFXKRTbaGHAsp8fUA" }, { "id": 4, "name": "Арчибальд", "job": "QA Lead", "photo": "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/05/game-of-thrones-season-1-recap.jpg?itok=ZwQDxPFR" }, { "id": 5, "name": "Клава", "job": "PM", "photo": "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/873/files/2019/04/game-of-thrones-character-poster.jpg" }, { "id": 6, "name": "Дуся", "job": "DM", "photo": "https://pmcvariety.files.wordpress.com/2017/12/game-of-thrones-sansa.jpg?w=1000&h=563&crop=1" }, { "id": 7, "name": "Саманта", "job": "BA", "photo": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lena-headey-cersei-lannister-game-of-thrones-season-8-1553173898.jpg?resize=480:*" }, { "id": 8, "name": "Ядвига", "job": "Junior QA", "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/8/episodes/69/ep69-gamerevealed-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg" }, { "id": 9, "name": "Акакий", "job": "DevOps", "photo": "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_450,q_80,w_800/v1389040063/wired_alfie-allen-on-game-of-thrones.jpg" }, { "id": 10, "name": "Нестор", "job": "DB Expert", "photo": "" }, { "id": 11, "name": "Потап", "job": "Solutions Architect", "photo": "" }, { "id": 12, "name": "Платон", "job": "DB Expert", "photo": "" }, { "id": 13, "name": "Ефросинья", "job": "Frontend Developer", "photo": "" }, { "id": 14, "name": "Джонатан", "job": "Backend Developer", "photo": "" }, { "id": 15, "name": "Грег", "job": "Грег", "photo": "" }, { "id": 16, "name": "Грег", "job": "Грег", "photo": "" }];


function changePoint(mainSelector, childSelector ){
  let object=document.querySelector(mainSelector);
  let photoPoints = object.querySelectorAll(childSelector);
  for(let i=0; i< photoPoints.length; i++){
      photoPoints[i].addEventListener('click',function (){
      let currentPoint=object.querySelector('.active');
      currentPoint.className=currentPoint.className.replace(' active','');
      this.className += " active";
    })
  }
}


//changePoint('.gallery__points', '.points-gallery__point');
changePoint('.person-photo__points', '.photo-points__point');
changePoint('.profile__menu', '.menu-profile__point');
//changePoint('.slider-pages ', '.slider-pages__page');

function changeGalleryPoint(mainSelector, childSelector){
  let object=document.querySelector(mainSelector);
  let photoPoints = object.querySelectorAll(childSelector);
  function setActiveClass (index){
    let currentPoint=object.querySelector('.active');
      currentPoint.className=currentPoint.className.replace(' active','');
      photoPoints[index].className += " active";
      let b=[mockData[index*4],mockData[1+index*4], mockData[2+index*4], mockData[3+index*4]];
      renderGallery(b);
  }

  for(let i=0; i< photoPoints.length; i++){
      photoPoints[i].addEventListener('click',function (){
        index=i;
        setActiveClass (i);
      });
  }

  let timeInterval=setInterval(function(){
    ++index;
    if(index>=photoPoints.length){
      index=0;
    }
    setActiveClass (index);
    },4000);
}

changeGalleryPoint('.gallery__points', '.points-gallery__point');



/*let galleryPoints = document.querySelectorAll(".points-gallery__point");
for (let j = 0; j <  galleryPoints.length; j++) {
    galleryPoints[j].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[3].className = current[3].className.replace(" active", "");
    this.className += " active";
  });
}

let profilePoints = document.querySelectorAll(".menu-profile__point");
for (let j = 0; j < profilePoints.length; j++) {
    profilePoints [j].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[2].className = current[2].className.replace(" active", "");
    this.className += " active";
  });
}

let sliderPages = document.querySelectorAll(".slider-pages__page");
for (let j = 0; j < sliderPages.length; j++) {
    sliderPages[j].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/

let currentSlide = 0;

const slides =[
    {id:1, name: 'Derek Anderson', job:'BRITISH COMEDIAN', video:'some src',title:'ENQUIRE ABOUT DEREK'},
    {id:2, name: 'Sarah Anderson', job:'ENGINEER', video:'some src',title:'ENQUIRE ABOUT SARAH'},
    {id:3, name: 'Jimmy Anderson', job:'JUDGE', video:'some src',title:'ENQUIRE ABOUT JIMMY'},
    {id:4, name: 'Hovard Anderson', job:'LAWYER', video:'some src',title:'ENQUIRE ABOUT HOVARD'}
];


const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');


function doSlide(direction) {
    currentSlide += direction;
    document.querySelector('h1').innerText = slides[currentSlide].name;
    document.querySelector('.person-job').innerText = slides[currentSlide].job;
    document.querySelector('.slide-title').innerText = slides[currentSlide].title;

    let object=document.querySelector('.slider-pages');
    let slideNum = object.querySelectorAll('.slider-page');
    let currentNum=object.querySelector('.active');
    currentNum.className=currentNum.className.replace(' active','');
    slideNum[currentSlide].className += " active";

    if (currentSlide === 0){
        leftArrowElement.classList.add('disabled');
    }else{
        leftArrowElement.classList.remove('disabled');
    }

    if (currentSlide === 3){
      rightArrowElement.classList.add('disabled');
    }else{
      rightArrowElement.classList.remove('disabled');
    }
}

leftArrowElement.addEventListener('click',function () {doSlide(-1)});
rightArrowElement.addEventListener('click',function () {doSlide(1)});





function httpGet(url) {

  return new Promise(function (resolve, reject) {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);

      xhr.onload = function () {
          if (this.status == 200) {
              resolve(this.response);
          } else {
              var error = new Error(this.statusText);
              error.code = this.status;
              reject(error);
          }
      };

      xhr.onerror = function () {
          reject(new Error("Network Error"));
      };

      xhr.send();
  });

}


httpGet('https://jsonplaceholder.typicode.com/users').then(response => {
  if (response && response.length) {
      //renderGallery(response);
      let b=[mockData[0],mockData[1], mockData[2], mockData[3]];
      renderGallery(b);
  }
}, errors => {
  console.log(errors);
});


function renderGallery(data) {
  $('.gallery').empty();
for (let item of data) {
  $('.gallery').append(`
  <div class="gallery__photo" style="background-image: url('${item.photo}');">
  <div class="photo__dark-screen dark-screen">
          <div class="dark-screen__text text">
          <p class="text__name name poppins-regular">${item.name}</p>
          <p class="text__job job nunito-extrabold">${item.job}</p>
      </div>
      <div class="dark_screen__button arrow-button">
              <i class="fas fa-arrow-right"></i>
          </div>
      </div>
</div>
  `);
}
}

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);