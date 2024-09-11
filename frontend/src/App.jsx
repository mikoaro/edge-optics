import SideBar from "./components/SideBar2";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <div className="content-wrapper">
            <main>
              <Row>
                <Col lg={2}>
                  <SideBar />
                </Col>
                <Col lg={10}>
                  <Routes>
                    <Route path="/" element={<Dashboard />}>
                      <Route index element={<Dashboard />} />
                    </Route>
                  </Routes>
                </Col>
              </Row>
            </main>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
