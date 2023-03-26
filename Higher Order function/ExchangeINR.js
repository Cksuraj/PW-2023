//  Creating Programm That exchange the USD into INR

// exchange rate of 1 USD to 80 INR
const exchangeRate = 80;

const pricesInUSD = {
    Apple_juice: 3.5,
    Mango_juice: 2,
    Orange_juice: 5,
    Graph_juice: 6,
    Cola_juice: 10
};

const IndianINR_price = Object.fromEntries(

    //  creating map higher order function for calculating the Priceing in indian Rupess.

    Object.entries(pricesInUSD).map(([itemName, priceInUSD]) => {
        const priceInRupees = priceInUSD * exchangeRate;
        return [itemName, priceInRupees];
    })
);

console.log(IndianINR_price);


