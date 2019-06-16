let playerSign=0;
let compSign=0;

let row=0;
let col=0;

let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let winner='';

//Game logic.
//Define the order of the course.
function randomPlayer() {
    let rand= Math.random()*10;
    if(rand>5){
        playerSign=2;
        compSign=1;
        alert('Computer starts!');
        computerStep();
    }else{
        playerSign=1;
        compSign=2;
        alert('Player starts!');
    }
}

//Auxiliary function for checking is the element 0 or not. If true - change to 1 or 2.
function fillTheField(o,t,sign){
    if (arr[o][t]===0){
        arr[o][t]=sign;
    }
}

//Auxiliary function for computer's course(random move).
function makeAStep(){
    let z=Math.floor(Math.random()*3);
    let s=Math.floor(Math.random()*3);
    while (arr[z][s]!==0){
        z=Math.floor(Math.random()*3);
        s=Math.floor(Math.random()*3);
        }
    fillTheField(z,s,compSign);
    row=z;
    col=s;
};

//Auxiliary function for cleaning the field.
function clearTheField(){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            arr[i][j]=0;
            arrVis[i][j].textContent="";
        }
    }
};

//Check the condition of victory(one step to victory).
function oneStepToWin(mean){
    for(let k=0;k<arr.length;k++){
        for(let t=0;t<arr[k].length;t++){
            if(arr[k][t]==mean && arr[k][t+1]==mean && arr[k][t+2]===0){
                row=k;
                col=t+2;
                return;
            }else if(arr[k][t]==mean && arr[k][t+2]==mean && arr[k][t+1]===0){
                row=k;
                col=t+1;
                return;
            }else if(arr[k][t+1]==mean && arr[k][t+2]==mean && arr[k][t]===0){
                row=k;
                col=t;
                return;
            }
            else if(arr[k][t]==mean && arr[k+1][t]==mean && arr[k+2][t]===0){
                row=k+2;
                col=t;
                return ;
            }else if(arr[k][t]==mean && arr[k+2][t]==mean && arr[k+1][t]===0){
                row=k+1;
                col=t;
                return;
            }else if(arr[k+1][t]==mean && arr[k+2][t]==mean && arr[k][t]===0){
                row=k;
                col=t;
                return;
            }else if(arr[k][t]==mean && arr[k+1][t+1]==mean && arr[k+2][t+2]===0){
                row=k+2;
                col=t+2;
                return;
            }else if(arr[k][t]==mean && arr[k+2][t+2]==mean && arr[k+1][t+1]===0){
                row=k+1;
                col=t+1;
                return;
            }else if(arr[k+1][t+1]==mean && arr[k+2][t+2]==mean && arr[k][t]===0){
                row=k;
                col=t;
                return;
            }
            else{
                return false;
            }
        }
    }
};


//Check the condition of victory.
function checkTheWin(sign){
    for(let i=0;i<arr.length;i++){
        let temp=true;
        for(let j=0;j<arr[i].length;j++){
            temp=temp&&(arr[i][j]===sign);
        }
        if(temp){
            winner=sign;
            return true;
        }
    }
    for(let j=0;j<arr.length;j++){
        let temp=true;
        for(let i=0;i<arr.length;i++){
            temp=temp&&(arr[i][j]===sign);
        }
        if(temp){
            winner=sign;
            return true;
        }
    }
    let temp=true;
    for(let i=0;i<arr.length;i++){
        temp=temp&&(arr[i][i]===sign)
    }
    if(temp){
        winner=sign;
        return true;
    }
    temp=true;
    for(let i=0;i<arr.length;i++){
        temp=temp&&(arr[i][arr.length-i-1]===sign)
    }
    if(temp){
        winner=sign;
        return true;
    }
    for(let k=0;k<arr.length;k++){
        for(let t=0;t<arr[k].length;t++){
            if(arr[k][t]===0){
                return false;
            }
        }
    }

    winner='NOBODY';
    return true;
}




//Visualization.

let arrItems=[...document.getElementsByClassName('item')];
let arrRow1=arrItems.slice(0, 3);
let arrRow2=arrItems.slice(3, 6);
let arrRow3=arrItems.slice(6, 9);

let arrVis=[arrRow1,arrRow2,arrRow3];

function addTheSign(i,j){
    if (arr[i][j]===1){
        arrVis[i][j].textContent="X";
    }else{
        arrVis[i][j].textContent="0";
    }
}

function theWinner(){
    if(winner==compSign){
        alert('Computer WIN! Press "BEGIN!" to try again.');
    }else if(winner==playerSign){
        alert('YOU WIN! Press "BEGIN!" to try again.');
    }else if(winner=='NOBODY'){
        alert(winner+' WIN! Press "BEGIN!" to try again.')
    }else{
        return;
    }
}

//Computer's turn.
function computerStep(){
    let i;
    let j;
    if(oneStepToWin(compSign)!==false){
        i=row;
        j=col;
        fillTheField(row,col,compSign);
    }else if(oneStepToWin(playerSign)!==false){
        i=row;
        j=col;
        fillTheField(row,col,compSign);
    }else if(arr[1][1]===0){
        i=1;
        j=1;
        fillTheField(1,1,compSign);
    }else{
        makeAStep();
        i=row;
        j=col;
    }
addTheSign(i,j);
if(checkTheWin(compSign)){
theWinner();
}else{
return;
}
};

//Player's turn.
for(let i=0;i<arrVis.length;i++){
    for(let j=0;j<arrVis[i].length;j++){
        arrVis[i][j].addEventListener('click',function visualization(){
            fillTheField(i,j,playerSign);
            addTheSign(i,j,playerSign);
            if(!checkTheWin(playerSign)){
                computerStep();
            }else{
                theWinner();
                return;
            }
    });
}
}