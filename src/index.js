import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hem from './views/Hem';
import Contact from './views/Contact';
import Service from './views/Service';
import News from './views/News';
import NotFound from './views/NotFound';
import NewsDetails from './views/NewsDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Hem/>} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/service' element={ <Service/>} />
        <Route path= '/news' element= { <News />} />
        <Route path= '/newsdetails/:id' element={<NewsDetails/>} />
        <Route path= '/newsdetails/:/*' element={<NotFound/>} />
        <Route path= '/newsdetails/*' element={<NotFound/>} />
        <Route path= '/*' element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

