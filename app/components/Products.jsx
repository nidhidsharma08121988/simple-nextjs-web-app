import React from 'react';
import Image from 'next/image';

async function fetchProducts() {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  return products;
}
const Products = async () => {
  const products = await fetchProducts();
  return (
    <div>
      <h3>Getting Dummy Products data through Custom API</h3>
      <div className='card'>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div>
                <h4>{product.name}</h4>
                <Image src={product.images[0]} alt={product.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
