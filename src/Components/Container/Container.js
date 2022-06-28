import React from 'react';
import classes from 'classnames/bind';
import defaultClasses from './Container.scss';

const cx = classes.bind({ ...defaultClasses });

const Container = (children, className, variant) => {
    const classes = cx(className, defaultClasses.root, {
        small: variant === 'small',
        xsmall: variant === 'xsmall',
    });

    return <div className={classes}>{children}</div>;
};

Container.displayName = 'Container';

export default Container;
