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
import Digitailization from './components/Digitalization';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Hem/>} />
        <Route path='/Contact' element={ <Contact />} />
        <Route path='Service' element={ <Service/>} />
        <Route path= '/News' element= { <News />} />
        <Route path= '/NewsDetails' element= {<NewsDetails/>} />

        <Route path= '/NewsDetails/:id' component= {<Digitailization/>} />

        <Route path= '/*' element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

