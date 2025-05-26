import Home from './Pages/Home'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
