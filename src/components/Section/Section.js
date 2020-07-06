import React from 'react';

import Container from 'react-bootstrap/Container';

const section = (props) => {
    return (
        <div style={{ padding: "80px 0px" }} className={props.bgColor}>
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

export default section;