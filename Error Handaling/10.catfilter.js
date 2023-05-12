
//  Creating the filter funtion for product object to to filter the deatails as per request
function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    }
  }
  

  // creating the  object array 
  const products = [
    { id: 1, name: 'Product 1', category: 'Electronics' },
    { id: 2, name: 'Product 2', category: 'Clothing' },
    { id: 3, name: 'Product 3', category: 'Electronics' },
    { id: 4, name: 'Product 4', category: 'Books' },
  ];
  
  const filterByCategory = filterProductsByCategory(products);
  
  const electronics = filterByCategory('Electronics');
  console.log(electronics); // [{ id: 1, name: 'Product 1', category: 'Electronics' }, { id: 3, name: 'Product 3', category: 'Electronics' }]
  
  const books = filterByCategory('Books');
  console.log(books); // [{ id: 4, name: 'Product 4', category: 'Books' }]
  