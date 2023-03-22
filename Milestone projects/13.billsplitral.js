const costpardish=25;
const numberofperson=4;
const bill =calculate(costpardish,numberofperson);

console.log(`Total bill of table is $${bill.totalbill} and Eachone have to pay $${bill.Eachparson}.`);

function calculate(costpardish,numberofperson){
    const  totalbill=costpardish * numberofperson;
    const  Eachparson= totalbill / numberofperson;

   const bill = {
        totalbill: totalbill,
        Eachparson: Eachparson
    };

    return bill;
}

