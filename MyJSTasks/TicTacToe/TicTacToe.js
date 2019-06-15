let a=0;
let b=0;
function randomPlayer() {
    let rand= Math.random()*10;
    if(rand>5){
        a=2;
        b=1;
        alert('Computer starts!');
        computerStep();
    }else{
        a=1;
        b=2;
        alert('Player starts!');
    }
}

let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

//Check is the element 0 or not. Change to 1 or 2.
function fillTheField(i,j,sign){
    if (arr[i][j]===0){
        arr[i][j]=sign;
    }
}

//ИИ пробуем рандомный ход.

function computerStep(){
    let i=Math.floor(Math.random()*3);
    let j=Math.floor(Math.random()*3);
    while (arr[i][j]!==0){
        i=Math.floor(Math.random()*3);
        j=Math.floor(Math.random()*3);
    }
    fillTheField(i,j,b);
    addTheSign(i,j);
    checkTheWin();
}

function clearTheField(){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            arr[i][j]=0;
            arrVis[i][j].textContent="";;
        }
    }
};

//Check the condition of victory.
function checkTheWin(){
    if(arr[0][0]==1 && arr[0][1]==1 && arr[0][2]==1 ||
        arr[1][0]==1 && arr[1][1]==1 && arr[1][2]==1 ||
        arr[2][0]==1 && arr[2][1]==1 && arr[2][2]==1 ||
        arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1 ||
        arr[0][1]==1 && arr[1][1]==1 && arr[2][1]==1 ||
        arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1 ||
        arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1 ||
        arr[0][2]==1 && arr[1][1]==1 && arr[2][0]==1)
        {
            alert('1 player WIN!');
            clearTheField();
    }else if(arr[0][0]==2 && arr[0][1]==2 && arr[0][2]==2 ||
            arr[1][0]==2 && arr[1][1]==2 && arr[1][2]==2 ||
            arr[2][0]==2 && arr[2][1]==2 && arr[2][2]==2 ||
            arr[0][0]==2 && arr[1][0]==2 && arr[2][0]==2 ||
            arr[0][1]==2 && arr[1][1]==2 && arr[2][1]==2 ||
            arr[0][2]==2 && arr[1][2]==2 && arr[2][2]==2 ||
            arr[0][0]==2 && arr[1][1]==2 && arr[2][2]==2 ||
            arr[0][2]==2 && arr[1][1]==2 && arr[2][0]==2)
            {
                alert('2 player WIN!');
                clearTheField();
        }
};


//Visualization

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

/*function showTheField(){
    let arrayRow=document.getElementsByClassName('arrayrow');
    arrayRow[0].textContent=arr[0];
    arrayRow[1].textContent=arr[1];
    arrayRow[2].textContent=arr[2];
};*/

/*for (i=0;i<arrVis.length;i++){
    for(j=0;j<arrVis[i].length;j++){
            arrVis[i][j].addEventListener("click", fillTheField(i,j,1));
    }
}
*/

/*fillTheField(0,0,1);
showTheField();
checkTheWin();  

fillTheField(0,1,2);
showTheField();
checkTheWin();  

fillTheField(1,1,1);
showTheField();
checkTheWin();  

fillTheField(1,2,2);
showTheField();
checkTheWin();  

fillTheField(2,2,1);
showTheField();
checkTheWin();  */