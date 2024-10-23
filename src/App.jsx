import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundsAndCancellation from "./pages/RefundsAndCancellation";
import OnlineRegistration from "./pages/OnlineRegistration";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure this is inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refunds-and-cancellation" element={<RefundsAndCancellation />} />
        <Route path="/online-registration" element={<OnlineRegistration />} />

        {/* 404 Fallback Route */}
        <Route path="*" element={
          <>
      <Header />
          <div className="flex flex-col gap-5 w-full h-svh justify-center align-center">
          <h1 className="font-mono text-2xl text-center">404 - Page Not Found</h1>
          <button onClick={()=>{window.history.back()}} className="mx-auto bg-primary text-bg px-4 py-2">Back To Home</button>
          </div>
          <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
