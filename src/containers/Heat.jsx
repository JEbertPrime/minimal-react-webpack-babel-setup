import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import ChartSection from '../components/ChartSection.jsx'
import styled from 'styled-components'


export default function Heat(props){
    return(
    <Container fluid style={{ backgroundColor:'rgba(104,42,42,1)'}} >
    <a id='heat' style=
        {{position:'relative',
        top: '-200px'}}
    />
        <Row style={{background:' linear-gradient(0deg, rgba(104,42,42,1) 2%, rgba(21,34,56,1) 100%)'
}}>
            <Col style={{padding: '100px', color:'white'}}>
                <h2 className='center'>Georgia is getting hotter.</h2>
                <hr style={{borderBottom: '1px solid white'}}/>
            </Col>
        </Row>
        <ChartSection backgroundHeight={500} >
        <h3 className='center'>Georgia experienced record setting heat in 2016, 2017, and 2019.</h3>
        <p>More frequent and intense heat waves are projected.</p>
        <p>Extreme heat threatens human health and labor productivity while exacerbating existing inequities.</p>
        </ChartSection>
    </Container>)
}