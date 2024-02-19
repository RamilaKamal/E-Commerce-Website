// components/FeaturedProducts.js
import React from 'react';

const FeaturedProducts = ({ product }) => {
  console.log(product[0]?.title, "from feature");

  return (
    <div className="featured-products">
      {product.map((product) => (
        <div className="product-list" key={product.title}>
          <img className='feature-image' src={product.image} alt={product?.title} />
          <div className="product ">
            {/* <img src={product.image} alt={product.title} /> */}
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;

