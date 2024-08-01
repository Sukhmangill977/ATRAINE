// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Trainings from './Trainings';
import Contact from './Contact';
import TrainingDetails1Month from './TrainingDetails1Month';
import TrainingDetails45Days from './TrainingDetails45Days';
import TrainingDetails6Months from './TrainingDetails6Months';
import PerksPage from './PerksPage';
import CertificateSample from './CertificateSample';
import RecommendationSample from './Recommendation-sample';
import OtherProducts from './OtherProducts';  // Import OtherProducts component
import PrivacyPolicy from './PrivacyPolicy';  // Import PrivacyPolicy component
import TermsAndConditions from './TermsAndConditions';  // Import TermsAndConditions component
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import InternshipForm from './InternshipForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/trainings/1-month" element={<TrainingDetails1Month />} />
            <Route path="/trainings/45-days" element={<TrainingDetails45Days />} />
            <Route path="/trainings/6-months" element={<TrainingDetails6Months />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/perks" element={<PerksPage />} /> {/* Added route for PerksPage */}
            <Route path="/certificate-sample" element={<CertificateSample />} />
            <Route path="/recommendation-sample" element={<RecommendationSample />} />
            <Route path="/other-products" element={<OtherProducts />} /> {/* Route for OtherProducts */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Route for PrivacyPolicy */}
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> {/* Route for TermsAndConditions */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/internship-form" element={<InternshipForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
