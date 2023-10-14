/* eslint-disable no-unused-vars */
import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "a",
      details: "ab",
      price: 100,
      discount: 5,
      brand: "d",
      thumb: "image",
    },
    {
      id: 2,
      title: "b",
      details: "ab",
      price: 100,
      discount: 5,
      brand: "d",
      thumb: "image",
    },
  ];
  console.log(products);
  return (
    <div>
      <h3 className="text-3xl italic font-bold my-5">Products & Items</h3>
      <div className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {products.map((product) => (
          <div
            className="border p-2"
            key={products.id}
          >
            <h4>{product.title}</h4>
            <h6 className="text-right">Brand: {product.brand}</h6>
            <div className="w-[95%] mx-auto">
              <img
                src={product.thumb}
                alt={product.thumb}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
