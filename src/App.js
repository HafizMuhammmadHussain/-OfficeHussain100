import logo from './logo.svg';
import './App.css';
import Slideshow from './components/slide'
import Header from './components/header';
import { sliderClasses } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Company from './components/Appbar/Company';
import Services from './components/Appbar/Services';
import Insights from './components/Appbar/Insights';
import { fontWeight } from '@mui/system';
import GlobalPartners from './components/Globalpartners';
import Helps from './components/Appbar/Help';
import Typography from '@mui/material/Grid';
import Innovationclass from './components/Innovation';
import Home from './components/Home';
import Work from './components/Appbar/Work';
import Careers from './components/Appbar/Careers';
import Contact from './components/Appbar/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">

      <Header />
      <div className='appsize'>
        <Routes>
          <Route path='/company' element={<Company />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Work />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>
      <Footer />


    </div >
  );
}




