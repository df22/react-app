import React from 'react';

import classes from './SocialMediaIcons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMediaIcons = () => {
    return (
        <ul className={classes.List}>
            <li className={classes.Icon}><a href="#facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
            <li className={classes.Icon}><a href="#twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
            <li className={classes.Icon}><a href="#pinterest"><FontAwesomeIcon icon={['fab', 'pinterest']} /></a></li>
            <li className={classes.Icon}><a href="#instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
            <li className={classes.Icon}><a href="#linkedin"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
        </ul>
    );
}

export default socialMediaIcons;