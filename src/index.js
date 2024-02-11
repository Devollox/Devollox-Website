import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/content.css'
import './styles/navbar.css'
import './styles/global.css'
import './styles/modal.css'
import './styles/theme/system.css'
import Update from "./components/Update/update";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="update" element={<Update />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();