import { Row, Col } from "reactstrap";
import { Controller, Scene } from "react-scrollmagic";
import {Timeline, Tween} from 'react-gsap'
import SLRGraphic from './SLRGraphic.jsx'
import React, {useState} from 'react'

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
  return (
      <>
    <Row style={{backgroundColor:'#227c9d'}}>
    
      <Col style={{padding: '0px'}}>
        <Controller>
          <Scene pin duration={5000} offset={300}>
            {progress=>{
                return <div style={{backgroundImage:`url(/wp-content/uploads/2021/06/layer_${Math.floor(progress*6)}.png`, backgroundSize:'cover', height: 'calc(100vh - 99px)', backgroundPosition:'center'}}>
                <Timeline
              playState={"stop"}
              totalProgress={progress}
              target={
                <>
                  {props.children.map((child) => (
                    <ScrollItem top={props.backgroundHeight / 2}>
                      <ScrollItemBox>{child}</ScrollItemBox>
                    </ScrollItem>
                  ))}
                </>
              }
            >
              {props.children.map((child, index) => {
                return (
                  <>
                    <Tween
                      from={{ y: props.backgroundHeight - 200, opacity: 0 }}
                      to={{ y: 0, opacity: 1 }}
                      duration={5}
                      target={index}
                    />
                    <Tween duration={5} target={index} />
                    <Tween
                      
                      to={{ opacity: 0 }}
                      duration={5}
                      target={index}
                    />
                  </>
                );
              })}
            </Timeline>
                </div>
            
            
        }}
          </Scene>
        </Controller>
      </Col>
    </Row>
    
    </>
  );
}
