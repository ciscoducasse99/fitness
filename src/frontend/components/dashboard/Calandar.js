import React from "react";

const Calandar = ({ time }) => {
  return (
    <div className="text-center">
      <h3>
        {time.month} {time.day} {time.year}
      </h3>
    </div>
  );
};

export default Calandar;
