import React from "react";
import LazyLoad from "react-lazyload";

import "../../styles/landing.scss";

const LazyImage = ({ item }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <div className="product-image-wrapper mx-4 ">
      <div className="product-image-placeholder" ref={refPlaceholder} />
      <LazyLoad>
        <a
          href={item.href}
          target="__blank"
          rel="noreferrer"
          className="d-block mx-auto"
        >
          <img
            className="product-image mx-auto border rounded-3 mb-2"
            loading='lazy'
            onLoad={removePlaceholder}
            onError={removePlaceholder}
            src={item.src}
            alt={item.src.length}
          />
          <div className="img-overlay">
            <span className="p-1 font-weight-bold darkred-badge rounded-3">
              {item.price}
            </span>
          </div>
        </a>
      </LazyLoad>

      <h6 className="text-truncate">{item.title}</h6>
    </div>
  );
};

export default LazyImage;
