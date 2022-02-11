import React from "react";
import { Spinner } from "reactstrap";

const DashboardLoading = ({ size }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-dark">
      <Spinner />
    </div>
  );
};

export default DashboardLoading;
