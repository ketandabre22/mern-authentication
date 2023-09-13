import Header from "./components/Header";
import { Container } from "react-bootstrap";
// import HomeScreen from "./screens/homeScreen";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
};

export default App;