import './App.css';
import './input.css';
import {Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/detailsPage';
import Navbar from './components/Navbar';
function App() {
  return (
  <div className="bg-gradient-to-b from-[#8E99FF] to-[#591CAC] h-screen">
    <Navbar />
    <Routes>
      <Route  path="/" element={<LandingPage/>}></Route>
      <Route path="/details" element={<DetailsPage/>}/>
    </Routes>
  </div>
  );
}

export default App;
