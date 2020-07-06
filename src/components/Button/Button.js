import React, { useState, useEffect } from 'react';

import classes from './Button.module.scss';

const Button = (props) => {

    const [active, setActive] = useState(false);

    

    const asignedClass = [];

    if (props.variant === 'primary') {
        asignedClass.push(classes.Primary);
    }

    if (props.variant === 'secondary') {
        asignedClass.push(classes.Secondary);
    }

    if (props.variant === 'secondary' && active) {
        asignedClass.push(classes.active);
    }

    const onClickHandler = () => {
        setActive(!active);
    }

    return (
        <button className={asignedClass.join(' ')} onClick={onClickHandler}>{props.children}</button>
    );
    
}

export default Button;