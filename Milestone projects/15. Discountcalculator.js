
//   Arrow Funtion for discount calculator 

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };


//  taking input values to calculate discount
  
const originalPrice = 100;
const discountedPrice = 70;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`You saved ${discountPercentage}% on this purchase!`);
