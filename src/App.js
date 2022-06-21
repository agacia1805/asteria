import React from 'react';
import { HeadProvider, Title } from 'react-head';
import Main from 'Layouts/Main/Main';

// import globalCSS from './scss/base/index.scss';
// import Main from '';

const App = () => {
    return (
        <HeadProvider>
            <Title>Asteria</Title>
            <Main />
        </HeadProvider>
    );
};

App.propTypes = {};

App.displayName = 'App';

// App.globalCSS = globalCSS;

export default App;
