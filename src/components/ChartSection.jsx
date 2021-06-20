import { Row, Col } from "reactstrap";
import { Controller, Scene } from "react-scrollmagic";
import {Timeline, Tween} from 'react-gsap'
import Chart from "./Chart.jsx";
import React from 'react'

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
  margin: auto;
`;
export default function ChartSection(props) {
  return (
    <Row>
      <Col>
        <Controller>
          <Scene pin duration={5000} offset={300}>
            {progress=>{
                return <div>
                <Chart progress={progress} />
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
  );
}
