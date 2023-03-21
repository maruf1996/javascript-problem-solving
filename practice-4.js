function average(n){
    let count=0;
    let sum=0;
    for(let i=1; i<=n; i++)
    if(i%3===0){
        console.log(i)
        count=count+1;
        sum=sum+i;
    }
    const avg=sum/count;
    console.log(avg);
}
average(10);