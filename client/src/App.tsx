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
import AuthContext from './context/AuthContext';
import BlogPost from './components/BlogPost';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Router>
        <AuthContext>

          <Header />

          <ContactButtons />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lunar-astro-blog' element={<CaseStudy />} />
            <Route path='/lunar-astro-blog/:blog_id' element={<BlogPost/>} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/review' element={<ReviewPage />} />
            <Route path='/auth' element={
              <AuthForm />
            }>
              <Route path='login' element={<LoginForm />} />
              <Route path='signup' element={<SignupForm />} />
            </Route>
            <Route path='/my-bookings' element={

              <MyBookings />

            } />
          </Routes>
          <Footer />
        </AuthContext>
      </Router>
    </div >
  );
}

export default App;