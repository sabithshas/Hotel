import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hotels from './pages/Hotels';
import Hotels2 from './pages/Hotels2';
import Forms from './pages/Forms';
import Details from './pages/Details';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Nav/> */}
    {/* <Footer/> */}
    {/* <Hotels/> */}
    {/* <Hotels2/> */}
    {/* <Forms/> */}
    {/* <Details/> */}
    {/* <Rooms/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
