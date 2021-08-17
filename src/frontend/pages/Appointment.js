import React, { useEffect } from "react";

const Appointment = () => {
  useEffect(() => {
    document.title = "Make An Appointment - Coach Chris";
  }, []);

  return <div>Appointment page</div>;
};

export default Appointment;
