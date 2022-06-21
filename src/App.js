import React from 'react';
import { Title } from 'react-head';
import { HelmetProvider as HeadProvider } from 'react-helmet-async';

// import globalCSS from './scss/base/index.scss';
// import Main from '';

const App = () => {
    return (
        <HeadProvider>
            <Title>Asteria</Title>
            <div>Asteria here</div>
            {/*<Main>*/}
            {/*</Main>*/}
        </HeadProvider>
    );
};

App.propTypes = {};

App.displayName = 'App';

// App.globalCSS = globalCSS;

export default App;
