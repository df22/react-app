import React from 'react';
import Card from 'react-bootstrap/Card';

import classes from './Service.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const service = (props) => {
    return (
        <div className={classes.Container}>
            <Card bg='light' className={classes.Item}>
                <Card.Body className={classes.Card}>
                    <div className={classes.Icon}>
                        <FontAwesomeIcon icon={props.icon} size="2x" />
                    </div>
                    <Card.Title>{props.cardTitle}</Card.Title>
                    <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default service;