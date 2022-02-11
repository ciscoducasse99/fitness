import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Spinner,
} from "reactstrap";

function Stats() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("/api/dashboard")
  //     .then((items) => {
  //       console.log(items);
  //       setItems(items.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       alert(err);
  //     });
  // });

  return (
    <div className="mb-3 mx-2">
      <h6 className="text-muted">Statistics</h6>
      <Card body className="border rounded-2">
        {loading ? (
          <div className="d-flex justify-content-between align-items-center">
            <Spinner color="danger" />
          </div>
        ) : (
          <ListGroup horizontal>
            {items.map((item) => (
              <ListGroupItem key={item.id}>
                <ListGroupItemHeading>
                  Heading for item with index of {item.id}
                </ListGroupItemHeading>
                <ListGroupItem>{item.message}</ListGroupItem>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
}

export default Stats;
