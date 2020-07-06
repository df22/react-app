import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Service from '../Service/Service';

const cardLayout = () => {
    return (
        <Row lg='3'>
            <Col className="mb-4">
                <Service cardTitle="Web Development" icon="layer-group" cardText="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy" />
            </Col>
            <Col className="mb-4">
                <Service cardTitle="Web Design" icon="palette" cardText="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy" />
            </Col>
            <Col className="mb-4">
                <Service cardTitle="Video Editing" icon="video" cardText="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy" />
            </Col>
            <Col className="mb-4">
                <Service cardTitle="Photography" icon="camera" cardText="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy" />
            </Col>
            <Col className="mb-4">
                <Service cardTitle="App Developing" icon={["fab", "apple"]} cardText="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy" />
            </Col>
            <Col className="mb-4">
                <Service cardTitle="SEO Expart" icon="file-alt" cardText="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy" />
            </Col>
        </Row>
    );
}

export default cardLayout;