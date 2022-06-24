import React from 'react';
import defaultClasses from './Container.scss';

const Container = (children, className, variant) => {
    const classes = cx(className, defaultClasses.root, {
        small: variant === 'small',
        xsmall: variant === 'xsmall',
    });

    return <div className={classes}>{children}</div>;
};

Container.displayName = 'Container';

export default Container;
