import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lunar-astro-blog' element={<CaseStudy/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;