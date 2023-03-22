// funtion for correcting the bug of the cart arry which is half 

const cart = [1, 2, 3, 4, 5];

function doubleCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
//  after correcting the bug  the out put of cart is dubbled 

  console.log(doubleCartQuantities(cart));   // Output: [2, 4, 6, 8, 10]
  