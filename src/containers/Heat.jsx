import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import ChartSection from '../components/ChartSection.jsx'
import styled from 'styled-components'


export default function Heat(props){
    return(
    <Container id='heat' style={{marginTop:'2em'}} >
        <Row>
            <Col>
                <h2 className='center'>Increasing temperatures are a health issue.</h2>
                <hr/>
            </Col>
        </Row>
        <ChartSection backgroundHeight={500} >
        <h1 className='center'>Temperatures will rise by as much as <br/> 1.5 degrees celsius by 2100</h1>
        <p>As our summers get hotter, the heat is felt most in urban areas</p>
        </ChartSection>
    </Container>)
}