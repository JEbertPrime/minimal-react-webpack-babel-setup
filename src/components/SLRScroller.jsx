import { Row, Col } from "reactstrap";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from 'react-gsap'
import SLRGraphic from './SLRGraphic.jsx'
import React, { useEffect, useState } from 'react'

import styled from "styled-components";
var ScrollItem = styled.div`
  text-align: center;
  top: ${(props) => props.top - 50}px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  position: absolute;
  opacity: 0;
`;
var ScrollItemBox = styled.div`
  background: rgba(255, 255, 255, 0.6);
  padding: 2rem 2rem 1rem 2rem;
  width: max-content;
  max-width: calc(99vw - 2rem);
  margin: auto;
`;
export default function SLRScroller(props) {
  var [level, setLevel] = useState(0)
  useEffect(()=>{
    var riseOceans = setInterval(()=>{
      setLevel(level +1)
    }, 1000)
    return ()=>clearInterval(riseOceans)
  })
  return (
    <>
      <Row className='slr-graphic' style={{ backgroundImage: `url('wp-content/themes/licenseplate/assets/images/layer_${level%7}.png')`, backgroundSize: 'cover', height: 'calc(60vh - 99px)', backgroundPosition: 'center center' }}>

        <Col style={{ padding: '0px' }}>
        <div >
          </div>
        </Col>
      </Row>

    </>
  );
}
