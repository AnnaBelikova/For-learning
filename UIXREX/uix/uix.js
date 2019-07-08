
//Validation
function FillTheInput(inputType, msg, addWord){
  msg.className=msg.className.replace(' invalid','');
  msg.className=msg.className.replace(' valid','');
  if (inputType.validity.patternMismatch || inputType.validity.typeMismatch) {
    msg.textContent ='Please, enter your ' + addWord +' !';
    msg.className += ' invalid';
  } else if(inputType.value.length===0){
    msg.textContent = 'Please fill the form!';
    msg.className += ' invalid';
  }else{
    msg.class += ' valid';
    msg.textContent='Correct!';
  }
}


  let name=document.getElementById('user_name');
  let msgName=document.getElementsByClassName("message_error")[0];
  let addName='name';
  name.addEventListener('input', function(event){
    FillTheInput(name, msgName, addName)
  });

  let mail=document.getElementById('e-mail');
  let msgMail=document.getElementsByClassName("message_error")[1];
  let addMail='e-mail';
  mail.addEventListener('input', function(event){
    FillTheInput(mail, msgMail, addMail)
  });


//Carousel

let index=0;

  const leftArrowElement = document.querySelector('.left');
  const rightArrowElement = document.querySelector('.right');
  const maxSlideNum=10;
  const minSlideNum=0;

  let autoScreen=autoS();
  function autoS(){
    return setInterval(function(){
    rotateSlide('gallery', 'gallery-item');
  },4000);
}



  rightArrowElement.addEventListener("click", function(){
    clearInterval(autoScreen);  
    ++index;
    rotateSlide('gallery', 'gallery-item');
    autoScreen=autoS();
  });
  leftArrowElement.addEventListener("click", function(){
    clearInterval(autoScreen);  
      --index;
      returnSlide('gallery', 'gallery-item');
      autoScreen=autoS();
  });



  let indexCom=0;
  let autoComments = autoC();
  function autoC(){
    return setInterval(function (){
      rotateSlide('wrapper', "comments_block__items");
	    let object=document.querySelector('.points');
      let commentPoints = object.querySelectorAll('.comments-point');
		  let currentPoint=object.querySelector('.active');
      currentPoint.className=currentPoint.className.replace(' active','');
		  if(indexCom==commentPoints.length-1){
			  commentPoints[0].className += " active";
			  indexCom=0;
		  }else{
		    commentPoints[indexCom+1].className += " active";
        indexCom=indexCom+1;
		  }
    },4000);
  }

  function changePoint(mainSelector, childSelector ){
    let object=document.querySelector(mainSelector);
    let commentPoints = object.querySelectorAll(childSelector);
    for(let i=0; i< commentPoints.length; i++){
      commentPoints[i].addEventListener('click',function (){
        clearInterval(autoComments);
        if(indexCom<i && indexCom+2==i || indexCom>i && indexCom-2 != i){
          returnSlide('wrapper', "comments_block__items");
        }else if(indexCom!=i){
          rotateSlide('wrapper', "comments_block__items");
        }
        autoComments = autoC();
        indexCom=i;
        let currentPoint=object.querySelector('.active');
        currentPoint.className=currentPoint.className.replace(' active','');
        this.className += " active";
    });
  }
}

changePoint('.points','.comments-point');


function rotateSlide(main, child){
 let mainArray=document.getElementById(main);
 let childElement=mainArray.getElementsByClassName(child)[0];
 childElement.className += ' current';
 setTimeout(()=>{
 mainArray.appendChild(childElement);
 childElement.className=childElement.className.replace(' current','');
  },1000);
}

function returnSlide(main, child){
  let mainArray=document.getElementById(main);
  let childElements=mainArray.getElementsByClassName(child);
  let childElement=childElements[childElements.length-1];
  let refChildElement=mainArray.getElementsByClassName(child)[0];
  mainArray.insertBefore(childElement,refChildElement);
  childElement.className += ' current';
  setTimeout(()=>{
  childElement.className=refChildElement.className.replace(' current','');
},50);
}

//Burger
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



