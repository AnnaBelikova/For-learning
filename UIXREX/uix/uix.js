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
  function changePoint(mainSelector, childSelector ){
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
    let nextMarginLeft=currentMarginLeft+slideWidth;
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
  rightArrowElement.addEventListener("click", function(){
    let currentMarginLeft= Number(wrapper.style.marginLeft.replace('px',''));
    let nextMarginLeft=-(slideWidth);
    var start = Date.now();

  var timer = setInterval(function() {
    var timePassed = Date.now() - start;
    wrapper.style.marginLeft = currentMarginLeft+(timePassed / 1000)*(nextMarginLeft-currentMarginLeft) + 'px';
    if (timePassed >= 1000) {
      clearInterval(timer); //
      return;
    }

  }, 20);
  });

  }

  changeScreenshots()
  /*changeScreenshots ('.screenshots_wrapper' , '.slider-left-arrow','.slider-right-arrow' )*/