import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from "./components/dashboard/header";
import News from "./components/news/news";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="news" element={<News />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();