import React from 'react';

//fa Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faLayerGroup, faVideo, faPalette, faFileAlt, faUsers, faGem, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

//Style
import './Home.scss';
import '../FontAwesome/css/all.css';

//Components
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';
import SocialMediaIcons from '../components/SocialMediaIcons/SocialMediaIcons';
import SectionHeader from '../components/Section/SectionHeader/SectionHeader';
import CardLayout from '../components/CardLayout/CardLayout';
import Line from '../components/Line/Line';
import Btn from '../components/Button/Button';

//Bootstrap
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';

//Assets
import man01 from '../assets/man-01.png';
import man02 from '../assets/man-02.png';
import img01 from '../assets/portfolio/img01.jpg';
import img02 from '../assets/portfolio/img02.jpg';
import img03 from '../assets/portfolio/img03.jpg';
import img04 from '../assets/portfolio/img04.jpg';
import img05 from '../assets/portfolio/img05.jpg';
import img06 from '../assets/portfolio/img06.jpg';
import img07 from '../assets/portfolio/img07.jpg';
import img08 from '../assets/portfolio/img08.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Add faIcons to library
library.add(fab, faCamera, faPalette, faLayerGroup, faVideo, faFileAlt, faUsers, faGem, faQuoteRight);

const home = (props) => {
  return (
    <div className="App">
      <Header />
      <Section>
        <Row>
          <Col className="my-auto" lg="7">
            <div className="d-flex">
              <SocialMediaIcons />
            </div>
            <h1 className="my-4 font-weight-bold" style={{ fontSize: '3.5rem' }}>I am Johnatan Doe</h1>
            <h3 className="my-4 font-weight-light">i'm Jonathan, professional web developer with long time experience in this field</h3>
            <div>
              <Button variant="outline-danger">My Portfolio</Button>
              <Btn variant='primary'>My Portfolio</Btn>
            </div>
          </Col>
          <Col lg="5">
            <img src={man01} alt="Man 01" />
          </Col>
        </Row>
      </Section>

      <Section bgColor="bg-dark">
        <h6 className="text-center text-uppercase text-danger pb-4">services</h6>
        <SectionHeader
          title="my services"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text." />
        <Line />
        <CardLayout />
      </Section>

      <Section>
        <SectionHeader
          title="about me"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text." />
        <Line />
        <Row>
          <Col lg="5">
            <img src={man02} alt="Man 02"></img>
          </Col>
          <Col lg="7" className="my-auto">
            <div>
              <h4 className="font-weight-bold">Hi There</h4>
              <p className="font-weight-light">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
            </div>
            <div>
              <Row>
                <Col>
                  <h6 className="text-danger">Name:</h6>
                  <p>Jonathan Doe</p>
                </Col>
                <Col>
                  <h6 className="text-danger">Phone:</h6>
                  <p>+1 023 454 345</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6 className="text-danger">Email:</h6>
                  <p>example@domain.com</p>
                </Col>
                <Col>
                  <h6 className="text-danger">LinkedIn:</h6>
                  <p>Jonathan_123</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Section>

      <Section bgColor="bg-dark">
        <Row>
          <Col className="mr-5">
            <h6 className="text-left text-uppercase text-danger pb-4">I'm expert on</h6>
            <h3 className="text-left font-weight-bold text-capitalize pb-3">lets work together</h3>
            <p className="text-left font-weight-light mx-auto py-3">Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
            <Button variant="outline-danger">Hire me now</Button>{' '}
          </Col>
          <Col>
            <p>Node JS</p>
            <ProgressBar now={88} />
            <p>Python</p>
            <ProgressBar now={81} />
            <p>Lavarel</p>
            <ProgressBar now={70} />
            <p>SEO</p>
            <ProgressBar now={90} />
          </Col>
        </Row>
      </Section>

      <Section>
        <div>
          <h3 className="text-capitalize font-weight-bold text-center">Portfolio showcase</h3>
          <p className="text-center font-weight-light w-50 mx-auto">Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in enim elementum varius.</p>
          <ButtonToolbar className="d-flex justify-content-center">
            <Btn variant='secondary'>All Works</Btn>
            <Btn variant='secondary'>Art Direction</Btn>
            <Btn variant='secondary'>Branding</Btn>
            <Btn variant='secondary'>Design</Btn>
            <Btn variant='secondary'>Web</Btn>
          </ButtonToolbar>

          <div className="Images">
            <Card.Img src={img01} className="Imgs" />
            <Card.Img src={img02} className="Imgs" />
            <Card.Img src={img03} className="Imgs" />
            <Card.Img src={img04} className="Imgs" />
            <Card.Img src={img05} className="Imgs" />
            <Card.Img src={img06} className="Imgs" />
            <Card.Img src={img07} className="Imgs" />
            <Card.Img src={img08} className="Imgs" />
          </div>
        </div>
      </Section>

      <Section bgColor="bg-dark">
        <Row>
          <Col>
            <FontAwesomeIcon icon="users" size="3x" className="m-auto d-block" />
            <h1 className="text-center pt-3 text-danger">47</h1>
            <h4 className="text-center font-weight-light text-capitalize pt-3">clients</h4>
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "codepen"]} size="3x" className="m-auto d-block" />
            <h1 className="text-center pt-3 text-danger">64</h1>
            <h4 className="text-center font-weight-light text-capitalize pt-3">projects</h4>
          </Col>
          <Col>
            <FontAwesomeIcon icon="gem" size="3x" className="m-auto d-block" />
            <h1 className="text-center pt-3 text-danger">16</h1>
            <h4 className="text-center font-weight-light text-capitalize pt-3">awards</h4>
          </Col>
          <Col>
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" className="m-auto d-block" />
            <h1 className="text-center pt-3 text-danger">10</h1>
            <h4 className="text-center font-weight-light text-capitalize pt-3">years of experience</h4>
          </Col>
        </Row>
      </Section>

      <Section>
        <Row>
          <Col>
            <p className="text-uppercase text-danger">our testimonials</p>
            <h3 className="font-weight-bold text-capitalize">Happy clients say</h3>
            <p className="font-weight-light">Phasellus accumsan scelerisque dolor, quis mattis justo  varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae <br /> <br />enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</p>
            <Button>Learn more</Button>
          </Col>
          <Col>
            <div>
              <p className="test">“In promotion and of advertising testimonial show consiss of a person's written orsoken statement extollig the virtue”</p>
            </div>
          </Col>
        </Row>
      </Section>
    </div >
  );
}

export default home;
