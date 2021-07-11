import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'reactstrap'
import Chart from '../components/Chart.jsx'
import styled from 'styled-components'


export default function Heat(props){
    var [progress, setProgress] = useState(0)
    useEffect(()=>{
        var increaseProgress = setInterval(()=>{
            setProgress(progress + 1)
            if(progress >= 100){
                clearInterval(increaseProgress)
            }
        }, 50)
    }, [])
    return(
    <Container fluid style={{ backgroundColor:'rgba(104,42,42,1)'}} >
    <a id='heat' style=
        {{position:'relative',
        top: '-200px'}}
    />
        <Row >
            <Col style={{padding: '100px', color:'white'}}>
                <h2 className='center'>Georgia is getting hotter.</h2>
                <hr style={{borderBottom: '1px solid white'}}/>
            </Col>
        </Row>
        <Chart progress={progress}></Chart>
    </Container>)
}