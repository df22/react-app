import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import classes from './Header.module.css';

const header = () => {
    return (
        <div className={classes.Header}>
            <Container className="d-flex">
                    <div>
                        <h1><a href="#home">Logo</a></h1>
                    </div>
                    <Nav className="ml-auto align-content-center">
                        <Nav.Item>
                            <Nav.Link>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
            </Container>
        </div>
    );
}

export default header;