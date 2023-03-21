function divisibleBy3(){
    let count=0;
    for(let i=1; i<=20; i++){
        if(i%3==0){
            // console.log(i);
            count=count+i;
        }
    }
    console.log(count)
}
divisibleBy3();