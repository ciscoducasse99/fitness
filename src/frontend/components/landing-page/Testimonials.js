import React from "react";
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import t3 from "../../images/t3.jpg";
import t4 from "../../images/t4.jpg";

const Testimonials = () => {
  const images = [
    {
      img: t2,
      person: "Windson H.",
      time: "3.5 Months",
    },
    { img: t1, person: "Susanna B.", time: "4 Months" },
    { img: t3, person: "Mara M.", time: "2 Months" },
    { img: t4, person: "Lucas M.", time: "3.5 Months" },
  ].map((image, i) => (
    <div
      className="col-10 col-md-6 p-2 p-md-3 p-lg-5 mx-auto text-center"
      key={image.person}
    >
      <img
        alt={i}
        src={image.img}
        style={{ height: "500px", width: "100%" }}
        className="shadow mb-3 rounded-3"
      />
      <p className="mb-0 h5 text-darkred">{image.person}</p>
      <small className="text-muted">{image.time}</small>
    </div>
  ));

  return (
    <div className="testimonals-section mt-5">
      <div className="container">
        <h3 className="mb-0">Testimonals</h3>
        <small className=" text-darkred">
          Few clients who have seen great results
        </small>
        <div className="mt-4 row">{images}</div>
      </div>
    </div>
  );
};

export default Testimonials;
