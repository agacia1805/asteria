import React from 'react';
import { bool, shape, string } from 'prop-types';

// import Container from 'theme/Container';
// import { SeoHead } from '@vaimo/hellyhansen-seo/src/components';
// import { CookieConsent } from 'theme/CookieConsent';

const Main = () => {
    return (
        <main>
            {/*<SeoHead />*/}
            <section>
                {/*<Container>*/}
                <span> © {new Date().getFullYear()} Asteria</span>
                {/*</Container>*/}
            </section>
        </main>
    );
};

Main.displayName = 'Main';

export default Main;

Main.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string,
    }),
    isMasked: bool,
};
