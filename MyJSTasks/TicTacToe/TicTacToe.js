let arr=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

//Check is the element 0 or not. Change to 1 or 2.
function fillTheField(i,j,a){
if (arr[i][j]===0){
    arr[i][j]=a;
}
}

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
        }else{
                alert('NEXT');
                return;
            }
};

function showTheField(){
document.write(arr[0]+'<br>');
document.write(arr[1]+'<br>');
document.write(arr[2]+'<br>');
}



fillTheField(0,0,1);
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
checkTheWin();  