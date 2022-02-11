import React from "react";

const ActivityTabItem = ({ id, message }) => {
  return (
    <h4 key={id} className="list-group-item mb-0">
      {message}
    </h4>
  );
};

export default ActivityTabItem;
