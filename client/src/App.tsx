import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import ContactUs from './pages/ContactUs';
import Header from './components/HomeComponents/Header';
import Footer from './components/HomeComponents/Footer';
import ReviewPage from './pages/ReviewPage';
import AuthForm from './pages/AuthForm';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import ContactButtons from './components/HomeComponents/ContactButtons';
import MyBookings from './pages/MyBookings';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Router>
        <Header />
        <ContactButtons />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lunar-astro-blog' element={<CaseStudy />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/review' element={<ReviewPage />} />
          <Route path='/auth' element={<AuthForm />}>
            <Route path='login' element={<LoginForm />} />
            <Route path='signup' element={<SignupForm />} />
          </Route>
          <Route path='/my-bookings' element={<MyBookings/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;