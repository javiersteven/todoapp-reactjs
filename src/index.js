import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// todo: implementar un update de los todos con otro modal (puede ser)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
