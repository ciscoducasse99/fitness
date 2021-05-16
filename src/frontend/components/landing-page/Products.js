import React, { useState } from "react";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";

const Products = () => {
  const products = [
    {
      img: p1,
      name: "Product 1",
      price: "$49.99",
    },
    {
      img: p2,
      name: "Product 2",
      price: "$49.99",
    },
    {
      img: p3,
      name: "Product 3",
      price: "$49.99",
    },
    {
      img: p4,
      name: "Product 4",
      price: "$49.99",
    },
    {
      img: p5,
      name: "Product 5",
      price: "$49.99",
    },
    {
      img: p6,
      name: "Product 6",
      price: "$49.99",
    },
    {
      img: p7,
      name: "Product 7",
      price: "$49.99",
    },
  ];

  return (
    <div className="py-3 products-section" id="products">
      <h3 className="container text-darkred mb-0">Affiliated Supplements</h3>
      <small className="text-muted container">
        Recommended products to use while dieting
      </small>
      <div className="product-scroller" style={{ overflowX: "hidden" }}>
        <nav className="nav d-flex justify-content-between p-0 pb-3">
          {products.map((item, i) => {
            return (
              <div key={i} className="mx-5">
                <div className="p-3 pb-1">
                  <img src={item.img} alt={i} className="product-img" />

                  <h5 className="mt-2 mb-0">{item.name}</h5>
                  <p className="mb-0">{item.price}</p>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Products;
