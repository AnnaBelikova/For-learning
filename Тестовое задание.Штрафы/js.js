let modal=document.querySelector('.modal__window');
let background=document.querySelector('.background');
let buttonLog=document.getElementById('login');
let buttonCls=document.querySelector('.close');

function showModal(){
    
    buttonLog.addEventListener('click', function(){
        modal.className = modal.className.replace(' hidden', '');
        background.className = background.className.replace(' hidden', '');
    })
}
showModal();

function hiddenModal(){
    buttonCls.addEventListener('click', function(){
        modal.className += ' hidden';
        background.className += ' hidden';
    });
    background.addEventListener('click', function(){
      modal.className += ' hidden';
      background.className += ' hidden';
  });
}

hiddenModal();




let object=document.querySelector('.help');
let helpButton=object.querySelector('.help__button');
let helpBurger=document.querySelector('.help__burger');

    function menuVisible(button){
        button.addEventListener('click', function(){
            let menu=object.querySelector(".help__menu");
            let menuClasses=menu.classList;
            let login=document.querySelector(".login__button");
            let loginClasses=login.classList;

            if (menuClasses.contains("visible")){
                menu.className= menu.className.replace(' visible', '');
            }else{
                menu.className += ' visible';
            }

            if (loginClasses.contains("show")){
              login.className= login.className.replace(' show', '');
            }else{
              login.className += ' show';
          }
        })
    }
menuVisible(helpButton);
menuVisible(helpBurger);



function showArticle(){
  let buttonOpen=document.querySelectorAll(".article__arrow");
  let text=document.querySelectorAll(".text");
  let object=document.querySelector(".third-screen");
  for(i=0;i<buttonOpen.length; i++){
        buttonOpen[i].addEventListener("click", function(){
        let ind= Array.prototype.indexOf.call(buttonOpen, this);
        textClasses=text[ind].classList;
        if(text[ind].classList.contains("visible")){
          text[ind].className = text[ind].className.replace(" visible","");
          buttonOpen[ind].className = buttonOpen[ind].className.replace(' up', ' down');
        }else{
        text[ind].className += " visible";
        buttonOpen[ind].className=buttonOpen[ind].className.replace(' down', ' up');
        }
    })
  }
};




showArticle();
