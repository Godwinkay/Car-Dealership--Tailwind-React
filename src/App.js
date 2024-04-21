import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import Testimonial from './components/Testimonial/Testimonial';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import 'aos/dist/aos.css'
import Aos from 'aos';

function App() {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
