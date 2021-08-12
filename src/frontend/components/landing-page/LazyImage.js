import React from "react";
import LazyLoad from "react-lazyload";

import "../../styles/landing.scss";

const LazyImage = ({ item }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <div className="product-image-wrapper mx-3 ">
      <div className="product-image-placeholder" ref={refPlaceholder} />
      <LazyLoad style={{ width: "250px" }}>
        <a
          href={item.href}
          target="__blank"
          rel="noreferrer"
          className="d-block mx-auto"
        >
          <img
            className="product-image mx-auto"
            onLoad={removePlaceholder}
            onError={removePlaceholder}
            src={item.src}
            alt={item.src.length}
          />
        </a>
      </LazyLoad>

      <h6 className="text-truncate">{item.title}</h6>
    </div>
  );
};

export default LazyImage;
