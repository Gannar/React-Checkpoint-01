import './App.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";

const firstName = "Meryam";
const greetingImageSrc = "https://th.bing.com/th/id/OIP.u4zAkuWSqRQLG_SIBCNMlgHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7"; 

const greetingName =
  typeof firstName === "string" && firstName.trim() ? firstName.trim() : null;

export default function App() {
  return (

    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm">
            {/* Your Image component at the top of the card */}
            <div className="card-img-top">
              <Image />
            </div>

            <Card.Body>
              {/* Use your existing components inside the Card body */}
              <div className="mb-2"><Name /></div>
              <Card.Text className="mb-3"><Description /></Card.Text>
              <Card.Text className="fw-bold"><Price /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-3" role="status" aria-live="polite">
        {`Hello, ${greetingName ?? "there"}!`}

        {greetingName && (
          <img
            src={greetingImageSrc}
            alt={`Hello, ${greetingName}!`}
            className="img-fluid d-block mx-auto mt-2"
            style={{ maxWidth: "320px" }}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    </Container>
  );
}
