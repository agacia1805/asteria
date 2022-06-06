import { HeadProvider, Title } from 'react-head';
// import Main from '';
// import Mask from 'react-input-mask';
// import Routes from '@magento/venia-ui/lib/components/Routes';
// import useLoadingBar from 'talons/LoadingBar';
// import globalCSS from 'style/base/index.scss';

const App = (props) => {
    const { markErrorHandled, renderError, unhandledErrors } = props;

    return (
        <HeadProvider>
            <Title>Homepage</Title>
            {/*<Main>*/}
            {/*    <Routes />*/}
            {/*</Main>*/}
            {/*<Mask isActive={hasOverlay} dismiss={handleCloseDrawer} />*/}
        </HeadProvider>
    );
};

App.propTypes = {};

App.displayName = 'App';

App.globalCSS = globalCSS;

export default App;
