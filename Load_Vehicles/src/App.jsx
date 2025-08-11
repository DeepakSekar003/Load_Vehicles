import HomePage from "./pages/HomePage";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from'./components/Contact';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/contact" element={<Contact />}/>
  </Routes>
  </Router>
  )
}

export default App;