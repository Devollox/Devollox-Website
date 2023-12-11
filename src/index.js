import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header";

import './styles/content.css'
import './styles/navbar.css'
import './styles/global.css'
import './styles/grid.css'
import './styles/modal.css'
import './styles/theme/system.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
    </React.StrictMode>
);

reportWebVitals();