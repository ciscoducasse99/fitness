import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "reactstrap";
import ActivityTabItem from "./ActivityTabItem";

const ActivityTab = () => {
  // Eventually, this tab should take in notifications for new payments, new forms,
  // scheduled appointments, current day appointments

  const [alerts, setAlerts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAlerts = async () => {
      const data = await axios.get("/api/notifications");
      console.log(data);
      setAlerts(data.data);
      setLoading(false);
    };

    getAlerts();
  }, []);

  return (
    <div>
      <h6 className="text-muted">Activity</h6>
      <Card body>
        {loading ? (
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="list-group w-100">
            {alerts.map((alert) => (
              <ActivityTabItem key={alert.id} {...alert} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default ActivityTab;
