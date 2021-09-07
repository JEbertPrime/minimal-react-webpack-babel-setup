import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Chart from '../components/Chart.jsx';
import OrangeHeader from '../components/OrangeHeader.jsx';
import MoreInfo from '../components/MoreInformation'
import HeatContainer from '../components/SectionContainer';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const GradientDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  @media (max-width: 768px) {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  z-index: 0;
`;

export default function Heat(props) {
  var [progress, setProgress] = useState(0);
  var [windowWidth, setWidth] = useState(null);
  useEffect(() => {
    var direction = true;
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    var increaseProgress = setInterval(() => {
      var currentProgress;

      setProgress((progress) => {
        currentProgress = progress;
        return direction ? progress + 1 : progress - 1;
      });
      if (currentProgress >= 100) {
        direction = false;
      } else if (currentProgress <= 10) {
        direction = true;
      }
    }, 50);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearInterval(increaseProgress);
    };
  }, []);
  return (
    <HeatContainer fluid>
      <a id="heat" style={{ position: 'relative', top: '-200px' }} />
      <Row
        style={{
          position: 'relative',
          zIndex: '2',
          height: '100%',
          minHeight: 'max-content',
        }}
      >
        <Col
          style={{
            color: 'white',
            paddingTop: '5em',
          }}
        >
          <div
            style={{
              zIndex: '1',
              position: 'relative',
              paddingBottom: '3em',
            }}
          >
            <OrangeHeader className="">
              3. Georgia is getting hotter.
            </OrangeHeader>
            <p>
              Georgia experienced record-setting heat in 2016, 2017,
              and 2019.
            </p>
            <p>More frequent and intense heat waves are projected.</p>
            <p>
              Extreme heat threatens human health and labor
              productivity while exacerbating existing inequities.
            </p>
            <MoreInfo>
            <h6>Information about this graphic</h6>
            <p>This map shows data collected by volunteers with <a href='https://urbanheatatl.org/'>UrbanHeatATL</a>, a community driven research project mapping Atlanta's heat islands.</p>
            <p>The dots on this map show where there are significantly higher temperatures than baseline temperatures measured at Atlanta's airport - the redder they are, the greater the heat difference.</p>
        </MoreInfo>
          </div>
          <GradientDiv />
          <BackgroundContainer>
            <Chart
              progress={progress}
              windowWidth={windowWidth}
            ></Chart>
          </BackgroundContainer>
        </Col>
        <Col md="6" />
      </Row>
    </HeatContainer>
  );
}
