import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import LazyImage from "./LazyImage";
import "../../styles/landing.scss";
import ProductModal from "./ProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((products) => {
        setProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <div className="py-5 mb-5 container products-section" id="products">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="text-darkred mb-0">Affiliated Supplements</h3>
          <small className="text-muted ">
            Recommended products to use while dieting
          </small>
        </div>
        <div className="d-flex justify-content-end">
          <Button className="text-muted" size="sm" outline onClick={toggle}>
            View More
          </Button>
          <ProductModal isOpen={modal} toggle={toggle} products={products} />
        </div>
      </div>
      <div className="product-scroller">
        <nav className="d-flex justify-content-between align-items-center">
          {products.slice(0, 10).map((item, i) => {
            return <LazyImage item={item} key={i} />;
          })}
        </nav>
      </div>
    </div>
  );
};

export default Products;
