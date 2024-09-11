import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Alert = ({alert}) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link>
          <Card.Img src={alert.uri} variant="top" />
        </Link>

        <Card.Body>
          <Link>
            <Card.Title as="div" className="alert-title">
              <strong>{alert.id}</strong>
            </Card.Title>
          </Link>


          <Card.Text as="h3">${alert.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Alert;
