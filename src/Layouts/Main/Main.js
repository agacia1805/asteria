import React from 'react';
import { shape, string } from 'prop-types';

// import Container from 'theme/Container';
// import { SeoHead } from '@vaimo/hellyhansen-seo/src/components';

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
        root: string,
    }),
};
