import { Button, Row, Col } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import { useState, useEffect } from "react";

import Alert from "../components/Alert";
import axios from "axios";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const fetchAlerts = async () => {
      const { data } = await axios.get(
        "http://localhost:9200/data-application/collections/90d549b6861912fc0d4e4cd3926e90ece02bbd87b1446c47e28fcb61382ca066/nfts"
      );

      setAlerts(data);
    };

    fetchAlerts();
  }, []);

  return (
    <>
      <Row>
        <ButtonToolbar aria-label="Toolbar with button groups" className="mt-3">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button className="btn btn-danger mr-3">Alerts</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button className="ml-3 btn btn-warning">Detections</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Row>
      <Row>
        {alerts.map((alert) => (
          <Col key={alert.id} sm={12} md={6} lg={4} xl={3}>
            <Alert alert={alert} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
