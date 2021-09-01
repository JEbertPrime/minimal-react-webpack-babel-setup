import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'reactstrap'
import Chart from '../components/Chart.jsx'
import OrangeHeader from '../components/OrangeHeader.jsx'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    width:100%;
`
const GradientDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background:linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    z-index: 1;
`
export default function Heat(props){
    var [progress, setProgress] = useState(0)
    var [windowWidth, setWidth] = useState(null)
    useEffect(()=>{
        var direction= true;
        function updateWidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        var increaseProgress = setInterval(()=>{

            var currentProgress
            
            setProgress(progress=>{
                currentProgress=progress
                return direction ? progress + 1 : progress - 1
                
            })
            if(currentProgress >= 100){
                direction = false
            }else if(currentProgress<=10){
                direction = true
            }
        }, 50)
        return ()=>{ window.removeEventListener('resize', updateWidth)
    clearInterval(increaseProgress)}
    }, [])
    return(
    <Container fluid style={{ backgroundColor:'black', position: 'relative', height: 'max-content'}} >
    <a id='heat' style=
        {{position:'relative',
        top: '-200px'}}
    />
        <Row  style={{position:'absolute', zIndex:'2'}}>
            <Col style={{paddingLeft:'20px', color:'white', paddingTop:'50px'}}>
                <OrangeHeader className='center'>2. Georgia is getting hotter.</OrangeHeader>
                <p>Georgia experienced record-setting heat in 2016, 2017, and 2019. More
frequent and intense heat waves are projected. Extreme heat threatens
human health and labor productivity while exacerbating existing inequities.</p>
            </Col>
            <Col md='6' />
        </Row>
        <GradientDiv />
        <BackgroundContainer>
        <Chart progress={progress} windowWidth={windowWidth}></Chart>

        </BackgroundContainer>
    </Container>)
}