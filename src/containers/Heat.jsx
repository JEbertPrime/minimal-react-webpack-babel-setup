import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'reactstrap'
import Chart from '../components/Chart.jsx'
import styled from 'styled-components'


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
    <Container fluid style={{ backgroundColor:'rgba(104,42,42,1)'}} >
    <a id='heat' style=
        {{position:'relative',
        top: '-200px'}}
    />
        <Row >
            <Col style={{padding: '30px', color:'white'}}>
                <h2 className='center'>Georgia is getting hotter.</h2>
                <hr style={{borderBottom: '1px solid white'}}/>
            </Col>
        </Row>
        <Chart progress={progress} windowWidth={windowWidth}></Chart>
    </Container>)
}