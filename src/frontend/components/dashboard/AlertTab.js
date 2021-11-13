import React from "react";

const AlertTab = () => {
  const fakeNotifications = [
    {
      id: 1,
      type: "New Customer",
      message: "Customer 1 just sent a new message",
    },
  ];
  return (
    <div className="list-group rounded-3 w-100">
      <h4 className="list-group-item">Alert1</h4>
      <h4 className="list-group-item">Alert1</h4>
      <h4 className="list-group-item">Alert1</h4>
      <h4 className="list-group-item">Alert1</h4>
      <h4 className="list-group-item">Alert1</h4>
    </div>
  );
};

export default AlertTab;
