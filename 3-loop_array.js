const arr=[3,9,76,4,97,45,27,98,65,48,34]
let largest=arr[0];
for(let i=0; i<arr.length;i++){
    const element=arr[i];
    // console.log(element);

    if(largest<element){
        largest=element;
    }
}
console.log(largest);