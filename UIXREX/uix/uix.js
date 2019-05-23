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
  const maxSlideNum=2;
  const minSlideNum=0;

  let timeInterval=setInterval(function(){
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
    },4000);


    function changePointAuto(main, child){
      let object=document.querySelector(main);
      let commentPoints = object.querySelectorAll(child);
      let currentPoint=object.querySelector('.active');
      currentPoint.className=currentPoint.className.replace(' active','');
      currentPoint=commentPoints[indexCom];
      currentPoint.className += " active";
      }



  rightArrowElement.addEventListener("click", function(){
      ++index;
      if(index>maxSlideNum){
        index=maxSlideNum;
      }
      changeSlides(index, 'gallery', 'gallery');
  });
  leftArrowElement.addEventListener("click", function(){
      --index;
      if(index<minSlideNum){
        index=minSlideNum;
      }
      changeSlides(index, 'gallery', 'gallery');
  });

  function changePoint(mainSelector, childSelector ){
    let object=document.querySelector(mainSelector);
    let commentPoints = object.querySelectorAll(childSelector);
    for(let i=0; i< commentPoints.length; i++){
      commentPoints[i].addEventListener('click',function (){
        indexCom=i;
        let currentPoint=object.querySelector('.active');
        currentPoint.className=currentPoint.className.replace(' active','');
        this.className += " active";
        changeSlides(indexCom, 'slide', 'wrapper' );
    });
  }
}

changePoint('.points','.comments-point');


  function changeSlides(index, idSlider, idWrapper ){

        let slideWidth=document.getElementById(idSlider).offsetWidth;
        let wrapper=document.getElementById(idWrapper);
        let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
        let nextMarginLeft=-(slideWidth*index);
        wrapper.style.marginLeft=nextMarginLeft+'px';

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
      };

