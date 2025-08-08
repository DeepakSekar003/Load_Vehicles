import HomePage from "./pages/HomePage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignupPage from "./components/SignupPage";



function App() {
  return(
    <>

       <Router>
         <Routes>
           <Route exact path="/" element={<HomePage/>} />
           <Route exact path="/SignupPage" element={<SignupPage/>} />



         </Routes>
       </Router>
         
      </>
  )
}

export default App;

      