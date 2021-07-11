import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export default function Resilience(){
    return (
        <Container fluid style={{ backgroundColor: 'white' }}>
            <Row>
                
                <Col className='center'>
                    <h2>Georgians are working to become more climate-resilient.</h2>
                    <hr/>
                    <p>Across the state, Georgians are taking concrete steps to minimize the risks of climate damages and build a just and resilient future. </p>
                </Col>
            </Row>
            <Row style={{marginTop:'20px', paddingBottom:'20px'}}>
                <Col md='6' style={{borderRight: '1px solid grey', paddingRight:'20px', paddingTop:'10px'}}>
                    <img width='100%' src='/wp-content/uploads/2021/06/stories_square.png'/>
                    <p className='center'><a style={{color:'#FC801E'}}href='stories.georgiaclimateproject.org'>View more climate stories ></a></p>
                </Col>
                <Col>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mbri3GlZwTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    )
}