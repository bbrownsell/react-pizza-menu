import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData, productDataTwo } from './components/Products/Data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading="Choose your favourite" data={productData}/>
      <Feature/>
      <Products heading="Sweet Treats for You" data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
