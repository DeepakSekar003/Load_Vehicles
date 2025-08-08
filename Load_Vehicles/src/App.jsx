import Homepage from "./pages/HomePage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Aboutfnc from "./pages/About";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/About" element={<Aboutfnc/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;