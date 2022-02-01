import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Components/Navbar/Header";
import HomeSection from "./Components/HomeContent/HomeSection";
import AboutSection from "./Components/AboutSection/About";
import Index from "./Components/CollectionPart/Index";
import Cards from "./Components/MainCards/Cards";
import FeatureCard from './Components/FeatureCards/FeatureCard';
import Creater from './Components/CreaterCards/Creater';
import Contact from "./Components/LastInputs/Contact";
import Nftbox from "./Components/NftBox/Nftbox";
import Footer1 from "./Components/Footer/Footer";





ReactDOM.render(
  <React.StrictMode>
  {/* <App/>  */}
     <Header/>
    <HomeSection/>
    <AboutSection />
    <Index/>
    <Cards/>
    <FeatureCard/>
      <Creater/>
      <Contact/>
      <Nftbox/>
      <Footer1/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
