import { Container, Row, Col, Collapse } from 'reactstrap';
import ControlSlider from '../components/ControlSlider.jsx';
import SLRGraphic from '../components/SLRGraphic.jsx';
import SLRScroller from '../components/SLRScroller.jsx';
import SLRContainer from '../components/SectionContainer';
import OrangeHeader from '../components/OrangeHeader.jsx';
import MoreInfo from '../components/MoreInformation';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


export default function SeaLevelRise(props) {
  var [level, setLevel] = useState(0);
  var [userControlled, setUserControlled] = useState(false);
  var [collapse, setCollapse] = useState(false);
  var riseOceans;
  useEffect(() => {
    riseOceans = setInterval(() => {
      if (!userControlled) {
        setLevel(level + 1);
      }
    }, 1000);
    return () => clearInterval(riseOceans);
  });
  return (
    <>
      <SLRContainer
        fluid
        style={{
          marginTop: '-15px',
          backgroundColor: 'rgba(0,0,0,.5)',
          position: 'relative',
          overflowY: 'hidden',
        }}
      >
        <a
          id="coast"
          style={{
            position: 'relative',
            top: '-200px',
          }}
        />
        <Row
          style={{
            padding: '5em 0em 0em 0em',
            minHeight: 'max-content',
            zIndex: 10,
          }}
        >
          <Col md="6" style={{ color: '#fef9ef', zIndex:'10'}}>
            <OrangeHeader>1. Our coasts are flooding.</OrangeHeader>

            <p>
              Coastal Georgia has seen nearly one foot of sea level
              rise since 1935.
            </p>
            <p>
              An additional increase of 4 to 6.3 feet is projected by
              2100.
            </p>
            <p>
              These changes can increase inequity, reduce property
              values, threaten infrastructure, damage ecosystems, and
              make us more vulnerable to hurricane damage.
            </p>
            <MoreInfo>
              <h6>Information about this graphic</h6>
              <p>This graphic shows the predicted sea coverage in the city of Savannah at high tide.</p>
              <p>The first frame shows no increase to sea level, and each frame after shows an additional one foot rise.</p>

            </MoreInfo>
          </Col>
          <Col md="3" />

          <Col md="2" />
        </Row>

        <div style={{position: 'absolute',
    background: 'rgb(43, 124, 155)',
    width:' 100%',
    height:' 100%',
    top: '0px',
    left: '0px',
    zIndex: '-1'
}}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <img
              src={`wp-content/themes/licenseplate-2021/assets/images/layer_${i}.png`}
              alt={`Sea level rise of ${i} feet in Savannah, GA`}
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                height: '105%',
                zIndex: -1,
                transform: 'rotate(180deg)',
                display: level % 7 == i ? 'block' : 'none',
              }}
            />
          ))}
        </div>
      </SLRContainer>
      
    </>
  );
}
