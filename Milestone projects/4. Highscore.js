
const marks=[15,25,50,30];
let highmark=marks[0];

for(let i=0; i<marks.length;i++){
    if(highmark < marks[i] ){
        highmark=marks[i];
    }
    // console.log(highmark);
}
console.log(" highMark of Student is  :" + "  "  + highmark);

//  we can directly use this math.max method to find max or min in arry with the spread opratore
//console.log(Math.max(...marks));

