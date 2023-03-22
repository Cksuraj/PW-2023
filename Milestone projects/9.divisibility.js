let num=[1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<num.length;i++){
    const number=num[i];
    
    if(number%2===0){
        //  as par the question we skip the number which is divisible by 2;
        continue;
    }

    if(number%3===0){
        console.log(number);
    }
}