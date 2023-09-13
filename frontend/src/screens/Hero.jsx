import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is a standard setup for MERN authentication, where JWTs are
            stored securely in HTTP-Only cookies. It uses Redux Toolkit for
            state management and incorporates the React Bootstrap library for UI
            components.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" href="/login" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary" href="/register">
                Register here!
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
