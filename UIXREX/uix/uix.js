
//Validation
let name=document.getElementById('user_name');
let msgName=document.getElementsByClassName("message_error")[0];
name.addEventListener('input', function(event){
  if (name.validity.patternMismatch) {
    msgName.className=msgName.className.replace(' invalid','');
    msgName.className=msgName.className.replace(' valid','');
	  name.setCustomValidity('Please, enter your name!');
    msgName.textContent='Please, enter your name!';
    msgName.className += ' invalid';
  } else if(name.value.length===0){
    msgName.textContent='Please fill the form!';
    msgName.className += ' invalid';

  }else{
  name.setCustomValidity('');
  msgName.className=msgName.className.replace(' invalid','');
  msgName.className=msgName.className.replace(' valid','');
  msgName.className += ' valid';
  msgName.textContent='Correct!';
  }
  });


let mail=document.getElementById('e-mail');
let msgMail=document.getElementsByClassName("message_error")[1];



mail.addEventListener('input', function(event){
  if (mail.validity.typeMismatch) {
    msgMail.className=msgName.className.replace(' invalid','');
    msgMail.className=msgName.className.replace(' valid','');
    msgMail.className += ' invalid';
	  msgMail.textContent='Please, enter your e-mail!';
    mail.setCustomValidity('Please, enter your e-mail!');
  } else if(mail.value.length===0){
    msgMail.className=msgName.className.replace(' invalid','');
    msgMail.className=msgName.className.replace(' valid','');
    msgMail.textContent='Please fill the form!';
    msgMail.className += ' invalid';

  }else{
  mail.setCustomValidity('');
  msgMail.className=msgName.className.replace(' invalid','');
  msgMail.className=msgName.className.replace(' valid','');
  msgMail.className += ' valid';
  msgMail.textContent='Correct!';
  }
  });

  let text=document.getElementById('textArea');
  let msgText=document.getElementsByClassName("message_error")[2];
  text.addEventListener('input', function(event){
    if(text.value.length<10 ){
    msgText.className=msgName.className.replace(' invalid','');
    msgText.className=msgName.className.replace(' valid','');
    msgText.textContent='Please fill the form!';
    msgText.className += ' invalid';
  }else if(text.value.length>=0){
    msgText.className=msgName.className.replace(' invalid','');
    msgText.className=msgName.className.replace(' valid','');
    msgText.textContent='Correct!';
    msgText.className += ' valid';
  }
});

let index=0;

  const leftArrowElement = document.querySelector('.left');
  const rightArrowElement = document.querySelector('.right');
  const maxSlideNum=10;
  const minSlideNum=0;

  let autoScreen = setInterval(function(){
    rotateSlide('gallery', 'gallery-item');
  },4000);



  rightArrowElement.addEventListener("click", function(){
    clearInterval(autoScreen);  
    ++index;
    rotateSlide('gallery', 'gallery-item');
  });
  leftArrowElement.addEventListener("click", function(){
    clearInterval(autoScreen);  
      --index;
      returnSlide('gallery', 'gallery-item')
  });



  let indexCom=0;
  let autoComments = setInterval(function (){
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

  function changePoint(mainSelector, childSelector ){
    let object=document.querySelector(mainSelector);
    let commentPoints = object.querySelectorAll(childSelector);
    for(let i=0; i< commentPoints.length; i++){
      commentPoints[i].addEventListener('click',function (){
        window.clearInterval(autoComments);
      if (indexCom<i){
			if(indexCom+2==i){
        window.clearInterval(autoComments);
				returnSlide('wrapper', "comments_block__items");
			}else{
        window.clearInterval(autoComments);
				rotateSlide('wrapper', "comments_block__items");
			}
        }else if(indexCom>i){
          if(indexCom-2==i){
            window.clearInterval(autoComments);
			  rotateSlide('wrapper', "comments_block__items");

          }else{
            window.clearInterval(autoComments);
			  returnSlide('wrapper', "comments_block__items");
			}
		}
        indexCom=i;
        let currentPoint=object.querySelector('.active');
        currentPoint.className=currentPoint.className.replace(' active','');
        this.className += " active";
        window.clearInterval(autoComments);
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



