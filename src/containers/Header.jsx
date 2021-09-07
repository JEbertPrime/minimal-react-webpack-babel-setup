import React, { useEffect, useState } from 'react';
import SectionIcon from '../components/SectionIcon.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import styled from 'styled-components';
import { device } from '../media/devices';
import { Container, Row, Col } from 'reactstrap';
const Sticky = styled.div`
  position: sticky;
  @media ${device.mobileS} {
    top: -125px;
    p{
    max-width:80%;
    margin:auto;
    text-align:center;
  }
  }
  @media ${device.tablet} {
    top: -90px;
    text-align:left;
    p{
    max-width:100%;
    
    text-align:left;
  }
  }
 
  padding-top:20px;
  padding-bottom:25px;
  background: white;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active ? '#FC801E' : 'black')};
  &:hover {
    text-decoration: none;
    color: #fc801e;
  }
`;
const StyledRow = styled(Row)`
  padding: 1rem 0rem 0rem 0rem;
`;
const ProgressBar = styled.hr`
  position: absolute;
  border: 0;
  border-top: 15px solid #fc801e;
  width: ${(props) => props.width + '%'};
  max-width: 99.9%;
  transition: width 0.1s;
  margin-left: 0px;
`;
const HeaderCol = styled(Col)`
  @media ${device.mobileS} {
    display: ${(props) => (props.inView ? 'block' : 'none')};
  }
  @media ${device.tablet} {
    display: block;
  }
`;
export default function Header(props) {
  var [scrollPercent, changeScrollPercent] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      changeScrollPercent((winScroll / height) * 100 - 10);
    }
  }, []);
  return (
    <Sticky>
      <Container style={{ padding: '0px' }}>
        <Row>
        <Col md='2'/>
          <Col
            md="4"
            className="mx-auto"
            style={{  alignSelf:'center'}}
          >
            <h2 className="center">Georgia Climate 101</h2>
          </Col>
          <Col center  md='4'style={{borderLeft: '1px solid #E07000'}}>
            <p className="">
              Climate change impacts the lives and livelihoods of
              Georgians across the state.
            </p>
            <p>
            Learn more about key impacts and solutions below.

            </p>
          </Col>
          <Col md='2'/>
        </Row>
      </Container>
      <ProgressBar width={scrollPercent} />
    </Sticky>
  );
}
