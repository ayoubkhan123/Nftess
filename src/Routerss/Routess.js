import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Collect from "../Pages/Collect";
import Faq from "../Pages/Faq";
import Feature from "../Pages/Feature";
// import Footer from "../Components/Footer/Footer";
// import Header from '../Components/Navbar/Header';




const Routess = () => {
    return (
        <div>
       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Collect/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/feature" element={<Feature/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default Routess;
