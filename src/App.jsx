import Home from "./Page/Homepage";
import Navbar from "./Component/Navbar";
import MiraCoinICOpage from "./Page/Miracoinpage";
import Contact from "./Page/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Explorer from "./Page/Explorer";
import LumiraSection from "./Page/LumiraSection";
import Tokenization from "./Page/Tokenizationpage";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MiraCoinICOpage" element={<MiraCoinICOpage />} />
        <Route path="/LumiraSection" element={<LumiraSection/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Tokenization" element={<Tokenization/>} />
        <Route path="/Explorer" element={<Explorer />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
