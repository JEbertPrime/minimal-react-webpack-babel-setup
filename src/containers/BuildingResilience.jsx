import React from 'react';
import {  Row, Col } from 'reactstrap';
import styled from 'styled-components';
import OrangeHeader from '../components/OrangeHeader.jsx'
import Container from '../components/SectionContainer'

const Link = styled.a`
  color: white;
  text-decoration:underline;
  &:hover {
    color: #E07000;
  }
`;
const GradientDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  @media (max-width: 768px) {
    background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 0) 100%
  );
  }
  z-index: 0;
`;
export default function CuttingEmissions() {
  return (
    <Container fluid style={{ backgroundColor: 'white', backgroundImage:'url(wp-content/themes/licenseplate/assets/images/resilient.jpg)', backgroundSize:'cover', marginTop:'-6px',backgroundPosition: 'center' , position:'relative'}}>
    <a id='emissions' style=
        {{position:'relative',
        top: '-200px'}}
    />
      <Row style={{ paddingTop: '5em', paddingBottom: '30px', height:'calc(90vh - 99px)', zIndex:'1', position:'relative' }}>
      <Col md={{size:6, order:1}}  xs={{size:1, order:2}} />
        <Col md={{size:6, order:2}}  xs={{size:12, order:1}} style={{color:'white'}}>
        <OrangeHeader >
        5. Georgians are working to become more climate-resilient.
        </OrangeHeader>
        <p>Across the state, Georgians are taking concrete steps to minimize the risks of climate damages and build a just and resilient future.

</p>
<p>
Learn more about <Link href=' https://www.georgiaclimateproject.org/portal/' target='_blank'>resiliency efforts</Link> underway in the state. 
</p>
        </Col>
       
      </Row>
      <GradientDiv/>

    </Container>
  );
}
