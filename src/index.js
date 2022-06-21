import React from 'react';
import ReactDOM from 'react-dom/client';
import Adapter from './Adapter';

const tree = <Adapter />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    tree,
    // <React.StrictMode>
    // <Adapter />,
    // </React.StrictMode>,
);
