 /*function changePoint(mainSelector, childSelector ){
        let object=document.querySelector(mainSelector);
        let photoPoints = object.querySelectorAll(childSelector);
        for(let i=0; i< photoPoints.length; i++){
            photoPoints[i].addEventListener('click',function (){
            let currentPoint=object.querySelector('.active');
            currentPoint.className=currentPoint.className.replace(' active','');
            this.className += " active";
          })
        }
      };

changePoint('.points', '.comments-point');*/
setTimeout(function run(){
  rotateSlide('gallery', 'gallery-item');
  setTimeout(run, 4000);
},4000);

//Validation
let name=document.getElementById('user_name');
//name.setCustomValidity('Please, enter your name!');
name.addEventListener('input', function(event){
  if (name.validity.patternMismatch) {
  name.setCustomValidity('Please, enter your name!');
  } else {
  name.setCustomValidity('');
  }
  });


let mail=document.getElementById('e-mail');
//mail.setCustomValidity('Please, enter your e-mail!');

mail.addEventListener('input', function(event){
  if (mail.validity.typeMismatch) {
  mail.setCustomValidity('Please, enter your e-mail!');
  } else{
  mail.setCustomValidity('');
  }
  });


//Screenshots




  //Comments
 /* function changePoint(mainSelector, childSelector ){
    let object=document.querySelector(mainSelector);
    let commentPoints = object.querySelectorAll(childSelector);
    for(let i=0; i< commentPoints.length; i++){
      commentPoints[i].addEventListener('click',function (){
        let currentPoint=object.querySelector('.active');
        currentPoint.className=currentPoint.className.replace(' active','');
        this.className += " active";
        let slideWidth=document.getElementById('slide').offsetWidth;
        let wrapper=document.getElementById('wrapper');
        let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
        let nextMarginLeft=-(slideWidth*i);
        var start = Date.now();
        var timer = setInterval(function() {
          var timePassed = Date.now() - start;
          wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';
          if (timePassed >= 1000) {
            clearInterval(timer); //
            return;
          }
        }, 20);
      })
    }
  }
  changePoint('.points','.comments-point');
  const leftArrowElement = document.querySelector('.left');
  const rightArrowElement = document.querySelector('.right');
 function changeScreenshots(){
  let slideWidth=document.getElementById('gallery').offsetWidth;
  let wrapper=document.getElementById('gallery');
 leftArrowElement.addEventListener("click", function(){
    let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
    let nextMarginLeft=0;
    
    if(currentMarginLeft===nextMarginLeft){
      return;
    }else{
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';
      if (timePassed >= 1000) {
        clearInterval(timer); //
        return;
      }
    }, 20);
    }
  });
  rightArrowElement.addEventListener("click", function(){
    let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
    let nextMarginLeft=-(slideWidth);
  
    if(currentMarginLeft===nextMarginLeft){
      return;
    }else{
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';
      if (timePassed >= 1000) {
        clearInterval(timer); //
        return;
      }
    }, 20);
    }
  });
}
function advance(){
  let slideWidth=document.getElementById('gallery').offsetWidth;
  let wrapper=document.getElementById('gallery');
  let start = Date.now();
  let timePassed = Date.now() - start;
  let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
  let nextMarginLeft=-(slideWidth);
  let timeout=setTimeout(function(){
    if(currentMarginLeft=0){
      wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';;
    }else{
      wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';
    }
    },4000);
}
  changeScreenshots();
  advance();*/
  /*changeScreenshots ('.screenshots_wrapper' , '.slider-left-arrow','.slider-right-arrow' )*/

 let index=0;
  let indexCom=0;

  const leftArrowElement = document.querySelector('.left');
  const rightArrowElement = document.querySelector('.right');
  const maxSlideNum=10;
  const minSlideNum=0;

 /* let timeInterval=setInterval(function(){
    ++index;
    ++indexCom;
    if(index>maxSlideNum){
      index=minSlideNum;
    }
    if(indexCom>maxSlideNum){
      indexCom=minSlideNum;
    }
    changeSlides(index, 'gallery', 'gallery');
    changeSlides(indexCom, 'slide', 'wrapper');
    changePointAuto('.points','.comments-point');
    },4000);*/


    /*function changePointAuto(main, child){
      let object=document.querySelector(main);
      let commentPoints = object.querySelectorAll(child);
      let currentPoint=object.querySelector('.active');
      currentPoint.className=currentPoint.className.replace(' active','');
      currentPoint=commentPoints[indexCom];
      currentPoint.className += " active";
      }*/


  rightArrowElement.addEventListener("click", function(){
      ++index;
      /*if(index>maxSlideNum){
        index=maxSlideNum;
      }*/
      //changeSlides(index, 'gallery', 'gallery');
      rotateSlide('gallery', 'gallery-item');
  });
  leftArrowElement.addEventListener("click", function(){
      --index;
      /*if(index<minSlideNum){
        index=minSlideNum;
      }*/
      returnSlide('gallery', 'gallery-item')
      //changeSlides(index, 'gallery', 'gallery');
  });

  /*let currentSlide=0;
  let currentTranslateValue = 0;
  let currentTranslate='translateX(0)';

 function doSlide(direction){
    if(direction < 0 && currentSlide===0 || direction>0 && currentSlide===2)return;
      currentSlide += direction;
      currentTranslateValue=currentSlide*100;
      currentTranslate = `translateX(0)(${currentTranslateValue}%)`;
      let wrapper=document.getElementById('gallery');
      wrapper.style.transform=currentTranslate;
  }*/

  setTimeout(function run(){
    rotateSlide('wrapper', "comments_block__items");
    setTimeout(run, 4000);
  },4000);

  function changePoint(mainSelector, childSelector ){
    let object=document.querySelector(mainSelector);
    let commentPoints = object.querySelectorAll(childSelector);
    for(let i=0; i< commentPoints.length; i++){
      commentPoints[i].addEventListener('click',function (){
        if (indexCom<i){
          rotateSlide('wrapper', "comments_block__items");
          if(indexCom+2==i){
          rotateSlide('wrapper', "comments_block__items");
          }
        }else if(indexCom>i){
          returnSlide('wrapper', "comments_block__items");
          if(indexCom-2==i){
          returnSlide('wrapper', "comments_block__items");
          }
        }
        indexCom=i;
        let currentPoint=object.querySelector('.active');
        currentPoint.className=currentPoint.className.replace(' active','');
        this.className += " active";
    });
  }
}

changePoint('.points','.comments-point');


  /*function changeSlides(index, idSlider, idWrapper ){

        //let slideWidth=document.getElementById(idSlider).offsetWidth;
        let wrapper=document.getElementById(idWrapper);
        currentTranslateValue=index*(-20);
        let currentTranslate = `translateX(${currentTranslateValue}%)`;
        wrapper.style.transform=currentTranslate;
        //let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
        //let nextMarginLeft=-(slideWidth*index);
       // wrapper.style.marginLeft=nextMarginLeft+'px';

        /*if(currentMarginLeft===nextMarginLeft){
          return;
        }else{
          let start = Date.now();
    
          let timer = setInterval(function() {
          let timePassed = Date.now() - start;
          wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';
          if (timePassed >= 1000) {
            clearInterval(timer); //
            return;
          }
    
        }, 20);
        }*/
     /* };*/

function rotateSlide(main, child){
 let mainArray=document.getElementById(main);
 let childElement=mainArray.getElementsByClassName(child)[0];
 
 childElement.className += ' current';
 setTimeout(()=>{
 mainArray.appendChild(childElement);
 childElement.className=childElement.className.replace(' current','');
  },500);
}

function returnSlide(main, child){
  let mainArray=document.getElementById(main);
  let childElements=mainArray.getElementsByClassName(child);
  let childElement=childElements[childElements.length-1];
  let refChildElement=mainArray.getElementsByClassName(child)[0];
  childElement.className += ' current';
  
  mainArray.insertBefore(childElement,refChildElement);
  setTimeout(()=>{
  childElement.className=refChildElement.className.replace(' current','');
},10);
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



