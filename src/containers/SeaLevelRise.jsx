import {Container, Row, Col} from 'reactstrap'
import ControlSlider from '../components/ControlSlider.jsx'
import SLRGraphic from '../components/SLRGraphic.jsx'
import SLRScroller from '../components/SLRScroller.jsx'
import styled from 'styled-components'
import React, {useState} from 'react'
const StyledContainer = styled(Container)`

`
const ReadMore =styled.a`
color:#FC801E;
&:hover{
    color:#FC801E;
}
`
export default function SeaLevelRise(props){
    var [level, changeLevel] = useState(0)
    return(
        <Container fluid id='coast' style={{marginTop:'-15px'}}>
            
            <Row style={{padding:'10em 0em 10em 0em', backgroundColor:'#227c9d'}}>
                <Col style={{position:'sticky', top:'100px', color:'#fef9ef'}}>
                    <h2 className='text-center'>
                        Our coasts are flooding.
                    </h2>
                    <p className='text-center'>
                    Coastal Georgia has seen nearly one foot of sea level rise since 1935.  
                    </p>
                    
                </Col>
                </Row>
                <SLRScroller backgroundHeight={800}>
                <h2>Coastal communities are building resilience</h2>
                    <p>In Savannah, coastal communities are building resilience.</p>
                    <ReadMore href='http://stories.georgiaclimateproject.org/?region=Coastal%20Georgia&theme=Solutions:%20Adaptation'>Read More </ReadMore>
                </SLRScroller>
            
        </Container>
    )
}