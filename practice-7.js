const marks=[78,82,69];

function checkGPA(mark){
    for(let i=0; i<mark.length; i++){
        // console.log('student '+i+' marks '+mark[i]);
        if(mark[i]>=80){
            return true;
        }
    }
    return false;
}
console.log(checkGPA(marks));