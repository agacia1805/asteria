import React from 'react';
import ReactDOM from 'react-dom/client';
import Adapter from './Adapter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Adapter />,
    // </React.StrictMode>,
);
