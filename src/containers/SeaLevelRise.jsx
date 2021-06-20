import {Container, Row, Col} from 'reactstrap'
import ControlSlider from '../components/ControlSlider.jsx'
import SLRGraphic from '../components/SLRGraphic.jsx'
import styled from 'styled-components'
import React, {useState} from 'react'

const ReadMore =styled.a`
color:#FC801E;
&:hover{
    color:#FC801E;
}
`
export default function SeaLevelRise(props){
    var [level, changeLevel] = useState(0)
    return(
        <Container id='coast'>
            <Row>
                <Col>
                    <h1></h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='text-center'>
                        Georgia's coasts are at risk.
                    </h2>
                    <hr style={{color:'#00147D'}}/>
                    <p className='text-center'>
                    Coastal Georgia has experienced nearly one foot of sea level rise since 1935.  An additional increase of 4 to 6.3 feet is projected by 2100.
                    </p>
                    <div className='center'>
                    <h4>{level} ft. {level==0 ? '(current)' : ''}</h4>
                    <ControlSlider changeRise={changeLevel} />
                    </div>
                </Col>
                </Row>
                <Row>
                <Col>
                    <SLRGraphic level={level}/>
                </Col>
                </Row>
            <Row>
                <Col>
                    <h2>Coastal communities are building resilience</h2>
                    <p>In Savannah, coastal communities are building resilience.</p>
                    <ReadMore href='http://stories.georgiaclimateproject.org/?region=Coastal%20Georgia&theme=Solutions:%20Adaptation'>Read More </ReadMore>
                </Col>
                <Col>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gXsceo8xCiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </Col>
            </Row>
        </Container>
    )
}