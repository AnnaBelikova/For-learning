
for (let j=0; j<8; j++){
    let x='';
        for ( let i=0; i<8; i++){
            x = (( i + j ) % 2===0) ? (x + '#') : (x + ' ');
        }
    console.log(x);
}
