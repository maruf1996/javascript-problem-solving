function ProductPrice(kg){
    if(kg<=2){
        const price=kg*30;
        console.log(price)
    }
    else{
        const price=kg*25;
        console.log(price)
    }
}
ProductPrice(4);