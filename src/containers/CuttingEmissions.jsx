import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import OrangeHeader from '../components/OrangeHeader.jsx';
import Container from '../components/SectionContainer';

const Link = styled.a`
  color: white;
  text-decoration: underline;
  &:hover {
    color: #e07000;
  }
`;

const BackgroundContainer = styled.div`
position: absolute;
top: 0px;
left: 0px;
width:100%;
z-index: -1;
`
const AutoVideo = styled.video`
object-fit: cover;
min-width: 100%;
@media(min-width:768px){
    height: calc(100vh - 99px);
  }
  min-height: 100%;
`
const GradientDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
      background: rgba(0,0,0,.3);

  
  @media (max-width: 768px) {
    background: rgba(0,0,0,.3)
  ;
  }
  z-index: 0;
`;
export default function CuttingEmissions() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: 'transparent',
       
      }}
    >
      <a
        id="emissions"
        style={{ position: 'relative', top: '-200px' }}
      />
      <Row
        style={{
          paddingTop: '5em',
          paddingBottom: '30px',
          height: 'calc(90vh - 99px)',
        }}
      >
        <Col md={{ size: 6, order: 1 }} xs={{ size: 1, order: 2 }} />
        <Col
          md={{ size: 6, order: 2 }}
          xs={{ size: 12, order: 1 }}
          style={{ color: 'white' }}
        >
          <OrangeHeader>
            4. Georgia can be a leader in the zero emissions economy
            of the future.
          </OrangeHeader>
          <p>
            Georgia emits roughly 125 million tons of carbon pollution
            every year.{' '}
            <Link href="https://www.drawdownga.org/">
              Drawdown Georgia
            </Link>{' '}
            has identified 20 solutions that can shrink this footprint
            significantly by 2030.
          </p>
          <p>
            Doing so can grow Georgia’s economy, advance equity,
            improve public health, and protect the environment.
          </p>
        </Col>
      </Row>
      <BackgroundContainer>
        <GradientDiv />
        <AutoVideo autoPlay muted loop >
                <source src="wp-content/themes/licenseplate/assets/video/drone.mp4" type="video/mp4" />
            </AutoVideo>
        </BackgroundContainer>
    </Container>
  );
}
