import React, { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    document.title = "Make A Payment - Coach Chris";
  }, []);

  return <div>Payment Page</div>;
};

export default Payment;
