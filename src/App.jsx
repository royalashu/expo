import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />

        {/* 404 Fallback Route */}
        <Route path="*" element={<h1 className="font-mono text-center">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
