//  Arrow function for calculatin the final price of cart item

const cart=[ { item:3, quantity:5},
    { item:2 , quantity:4},
    { item:3 , quantity:3},
    { item:5 , quantity:2}, ];

    const calculate =(cart)=>{
      let cost=0;

      for( let i of cart){
        cost += i.item *i.quantity;
      }

      return cost;

    }

// testing the function.

    const cost= calculate(cart);
    console.log(`Total cost of unite prise is ${cost} `);

    