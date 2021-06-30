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
        <Container fluid  style={{marginTop:'-15px'}}>
            <a id='coast' style=
        {{position:'relative',
        top: '-200px'}}
    />
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
                <SLRScroller backgroundHeight={400}>
                <p>An additional increase of 4 to 6.3 feet is projected by 2100.</p>
                    <p>These changes can increase inequity, reduce property values, threaten infrastructure, damage ecosystems, and make us more vulnerable to hurricane damage. </p>
                    
                </SLRScroller>
            
        </Container>
    )
}