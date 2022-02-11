import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { Modal, ModalHeader, ModalBody, InputGroup, Input } from "reactstrap";

const ProductModal = ({ isOpen, products, toggle }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchProducts = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [products, searchTerm]);

  return (
    <Modal
      unmountOnClose
      isOpen={isOpen}
      scrollable
      toggle={toggle}
      size={"xl"}
      fade={false}
      className="modal-fullscreen-sm-down"
    >
      <ModalHeader
        className="text-darkred"
        toggle={toggle}
        close={<i className="fas fa-times fa-2x" onClick={toggle} />}
      >
        Affiliated Products
      </ModalHeader>

      <ModalBody className="pt-0">
        <InputGroup className="my-3">
          <Input
            value={searchTerm}
            placeholder="Search for product name here"
            onChange={searchProducts}
          />
        </InputGroup>
        {
          <small className="text-muted mb-2">
            Displaying {searchResults.length} items
          </small>
        }
        <div className="row">
          {searchResults.map((product) => {
            return (
              <div key={product.title} className="col-6 col-lg-4 py-3">
                <a
                  href={product.href}
                  target="__blank"
                  rel="noreferrer"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="modal-product-image-wrapper  mx-auto">
                    <LazyLoad>
                      <img
                        src={product.src}
                        alt={product.title}
                        className="modal-product-image border mb-2"
                      />
                      <div className="img-overlay">
                        <span className="p-1 font-weight-bold darkred-badge rounded-3">
                          {product.price}
                        </span>
                      </div>
                    </LazyLoad>

                    <h6 className="text-truncate">{product.title}</h6>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProductModal;
