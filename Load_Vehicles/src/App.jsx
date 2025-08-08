import HomePage from "./pages/HomePage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignupPage from "./components/SignupPage";
// import B_mobilenum from "./components/B_mobilenum";
// import Otp from "./components/Otp";
// import Details from "./components/Details";
// import Location from "./components/Location";
// import Fileuplod from "./components/Fileuplod";
// import Vehicles from "./components/Vehicles";
// import Accountdetail from "./components/Accountdetail";


function App() {
  return(
    <>

       <Router>
         <Routes>
           <Route exact path="/" element={<HomePage/>} />
           <Route exact path="/SignupPage" element={<SignupPage/>} />
           {/* <Route exact path="/B_mobilenum" element={<B_mobilenum/>} />
           <Route exact path="/Otp" element={<Otp/>} />
           <Route exact path="/Details" element={<Details/>} />
           <Route exact path="/Location" element={<Location/>} />
           <Route exact path="/Fileuplod" element={<Fileuplod/>} />
           <Route exact path="/Vehicles" element={<Vehicles/>} />
           <Route exact path="/Accountdetail" element={<Accountdetail/>} /> */}


         </Routes>
       </Router>
         
      </>
  )
}

export default App;

      