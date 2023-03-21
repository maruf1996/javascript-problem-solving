function electricityBill(unit){
    if(unit<=100){
        const bill=unit*5;
        console.log(bill)
    }
    else if(unit>100 && unit<200){
        const first100bill=100*5;
        const moreUnitBill=(unit-100)*6;
        const bill=first100bill+moreUnitBill;
        console.log(bill)
    }
    else if(unit>=200){
        const first100bill=100*5;
        const second100bill=100*6;
        const moreUnitBill=(unit-200)*7;
        const bill=first100bill+second100bill+moreUnitBill;
        console.log(bill)
    }
}
electricityBill(202)