import React from 'react';
import { HeadProvider, Title } from 'react-head';
// import globalCSS from './scss/base/index.scss';

// import Main from '';
// import Mask from 'react-input-mask';
// import Routes from '@magento/venia-ui/lib/components/Routes';
// import useLoadingBar from 'talons/LoadingBar';
// import globalCSS from 'style/base/index.scss';

const App = () => {
    return (
        <HeadProvider>
            <Title>Homepage</Title>
            <div>hello</div>
            {/*<Main>*/}
            {/*    <Routes />*/}
            {/*</Main>*/}
            {/*<Mask isActive={hasOverlay} dismiss={handleCloseDrawer} />*/}
        </HeadProvider>
    );
};

App.propTypes = {};

App.displayName = 'App';

// App.globalCSS = globalCSS;

export default App;
