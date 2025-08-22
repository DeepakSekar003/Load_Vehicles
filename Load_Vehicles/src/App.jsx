import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Aboutfnc from "./pages/About";
import LoginPage from "./components/LoginPage";
import Contact from "./components/Contact";
import B_mobilenum from "./components/B_mobilenum.jsx";
import Otp from "./components/Otp";
import CustomerPage from "./pages/CustomerPage.jsx";
import PersonalSec from "./pages/PersonalSec.jsx";
import BusinessSec from "./pages/BusinessSec.jsx";



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
           <Route exact path="/mobile" element={<B_mobilenum />} />
           <Route exact path="/otp" element={<Otp />} />
           <Route exact path="/CustomerPage" element={<CustomerPage/>} />
          <Route exact path="/BusinessSec" element={<BusinessSec/>} />
          <Route exact path="/PersonalSec" element={<PersonalSec/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
