function removeDuplicatesFromCart(cart) {
    const uniqueCart = []; // Initialize an empty array to hold unique items
  
    for (let item of cart) {
      if (!uniqueCart.includes(item)) {
        uniqueCart.push(item); // Add item to uniqueCart if it is not already there
      }
    }
  
    return uniqueCart;
  }
  
  // Example usage
  const shoppingCart = ["apple", "banana", "orange", "apple", "grape", "banana"];
  const uniqueCart = removeDuplicatesFromCart(shoppingCart); // Returns ["apple", "banana", "orange", "grape", "banana" 
console.log(" This is the original list of items " + " " + uniqueCart);