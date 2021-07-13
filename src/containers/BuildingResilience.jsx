import React from 'react'
import { Container, Row, Col,  Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

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
                    <Row style={{textShadow:'1px 1px 2px black'}}>
                    <Col md='6' style={{marginTop:'10px'}}>
                            <Card center style={{background:'url("https://www.georgiaclimateproject.org/stories/wp-content/uploads/sites/9/2021/04/GCP-Website-Updates-Custom-Dimensions.png")', backgroundSize:'cover', color:'white', fontFamily:'Open Sans Condensed', padding:'25px'}}>
                                <div>
                                    <h5>
                                        Climate On Our Minds: Biking with Dope Pedalers
                                    </h5>
                                    <h6>Atlanta</h6>
                                </div>
                                
                            </Card>
                        </Col>
                        <Col md='6' style={{marginTop:'10px'}}>
                            <Card center style={{background:'url("https://www.georgiaclimateproject.org/stories/wp-content/uploads/sites/9/2021/04/Nicole.png")', backgroundSize:'cover', color:'white', fontFamily:'Open Sans Condensed', padding:'25px'}}>
                                <div>
                                    <h5>
                                        Climate On Our Minds: Biking with Dope Pedalers
                                    </h5>
                                    <h6>Atlanta</h6>
                                </div>
                                
                            </Card>
                        </Col>
                        <Col md='6' style={{marginTop:'10px'}}>
                            <Card center style={{background:'url("https://www.georgiaclimateproject.org/stories/wp-content/uploads/sites/9/2021/05/Capture.png")', backgroundSize:'cover', color:'white', fontFamily:'Open Sans Condensed', padding:'25px'}}>
                                <div>
                                    <h5>
                                        Climate On Our Minds: Biking with Dope Pedalers
                                    </h5>
                                    <h6>Atlanta</h6>
                                </div>
                                
                            </Card>
                        </Col>
                        <Col md='6' style={{marginTop:'10px'}}>
                            <Card center style={{background:'url("https://www.georgiaclimateproject.org/stories/wp-content/uploads/sites/9/2021/05/Screen-Shot-2019-10-28-at-9_23_48-AM.png")', backgroundSize:'cover', color:'white', fontFamily:'Open Sans Condensed', padding:'25px'}}>
                                <div>
                                    <h5>
                                        Climate On Our Minds: Biking with Dope Pedalers
                                    </h5>
                                    <h6>Atlanta</h6>
                                </div>
                                
                            </Card>
                        </Col>
                    </Row>
                    <p className='center'><a style={{color:'#FC801E'}}href='stories.georgiaclimateproject.org'>View more climate stories ></a></p>
                </Col>
                <Col>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mbri3GlZwTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    )
}