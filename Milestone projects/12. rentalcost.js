const days = 5;
const carType = 'midsize';
const rentalCost = calculateRentalCost(days, carType);

function calculateRentalCost(days, carType) {
    let rentalCost;
  
    switch(carType) {
      case 'economy':
        rentalCost = 30;
        break;
      case 'midsize':
        rentalCost = 40;
        break;
      case 'Luxury':
        rentalCost = 50;
        break;
      default:
        rentalCost = 0;
        break;
    }
  
    return rentalCost * days;
  }

console.log(`The total cost for a ${carType} car rental for ${days} days is $${rentalCost}.`);
