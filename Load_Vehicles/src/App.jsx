import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Aboutfnc from "./pages/About";
import LoginPage from "./components/LoginPage";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/SignupPage" element={<SignupPage />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/About" element={<Aboutfnc />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
