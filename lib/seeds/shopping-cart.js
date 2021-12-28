module.exports = db => {

  [
    { name: 'Mediocre Iron Watch', priceInCents: 399 },
    { name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { name: 'Practical Copper Plate', priceInCents: 1000 },
    { name: 'Awesome Bronze Pants', priceInCents: 399 },
    { name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ].forEach(product => db.products.insert(product));

  [
    { product_id: 1, quantity: 1 },
    { product_id: 2, quantity: 2 },
    { product_id: 3, quantity: 1 },
    { product_id: 4, quantity: 4 },
    { product_id: 5, quantity: 1 },
    { product_id: 6, quantity: 3 },
    { product_id: 7, quantity: 1 },
    { product_id: 8, quantity: 6 },
    { product_id: 9, quantity: 1 },
  ].forEach(item => db.items.insert(item))

}
