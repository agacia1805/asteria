import React from 'react';
// import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Adapter = () => {
    return (
        // <ReduxProvider>
        <BrowserRouter>
            {/*<AppContextProvider>*/}
            <App />
            {/*</AppContextProvider>*/}
        </BrowserRouter>
        // </ReduxProvider>
    );
};

export default Adapter;
