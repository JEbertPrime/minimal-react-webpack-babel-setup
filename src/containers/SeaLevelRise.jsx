import { Container, Row, Col, Collapse } from 'reactstrap'
import ControlSlider from '../components/ControlSlider.jsx'
import SLRGraphic from '../components/SLRGraphic.jsx'
import SLRScroller from '../components/SLRScroller.jsx'
import OrangeHeader from '../components/OrangeHeader.jsx'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
const StyledContainer = styled(Container)`

`
const ReadMore = styled.a`
color:#FC801E;
&:hover{
    color:#FC801E;
}
`
export default function SeaLevelRise(props) {
    var [level, setLevel] = useState(0)
    var [userControlled, setUserControlled] = useState(false)
    var [collapse, setCollapse] = useState(false)
    var riseOceans
    useEffect(() => {
         riseOceans = setInterval(() => {
             if(!userControlled){
            setLevel(level + 1)
             }
        }, 1000)
        return () => clearInterval(riseOceans)
    })
    return (
        <>
        <Container fluid style={{ marginTop: '-15px', backgroundColor: '#227c9d', position: 'relative', overflowX: 'hidden' , zIndex: '-1'}}>
            <a id='coast' style=
                {{
                    position: 'relative',
                    top: '-200px'
                }}
            />
            <Row style={{ padding: '5em 0em 0em 0em', height: 'calc(100vh - 99px)', minHeight:'max-content', zIndex:10 }}>
                
                <Col md='6' style={{  color: '#fef9ef' }}>
                    <OrangeHeader >
                        1. Our coasts are flooding.
                    </OrangeHeader>

                    <p >
                        Coastal Georgia has seen nearly one foot of sea level rise since 1935.
                    </p>
                    <p >An additional increase of 4 to 6.3 feet is projected by 2100.</p>
                    <p >These changes can increase inequity, reduce property values, threaten infrastructure, damage ecosystems, and make us more vulnerable to hurricane damage. 
</p>

                </Col>
                <Col md='3'/>

                <Col md='2'/>
            </Row>
            
            
                <img src={`wp-content/themes/licenseplate/assets/images/layer_${level % 7}.png`} alt={`Sea level rise of 0-6 feet in Savannah, GA`} style={{position: 'absolute', top: '0px', right:'0px', height: '105%', zIndex: -1, transform: 'rotate(180deg)'}} />
        </Container>
        <Collapse isOpen={collapse}>
            <Container>
            <Row style={{marginTop:'20px'}}>
                <Col>
                <h2 >Information Portal Text</h2>
                <p>Coastal Georgia has experienced over 10 inches of sea level rise since 1935 [1].
The Georgia Department of Natural Resources recommends that coastal communities plan for 4 to 6.3 feet of sea level rise by 2100.
Up to 178,787 people in Georgia could be at risk of sea level rise impacts by 2100, many of whom are from socially vulnerable populations [2].
If sea levels rise 3 feet by 2100 (on the low end of projections), Georgia will lose 36 square miles of salt marsh—more than the area of Brunswick, GA [3]</p>
</Col>
<Col>
<iframe width="560" height="315" src="https://www.youtube.com/embed/hWSbTr_DzVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Col>
            </Row>
            </Container>
            
                    </Collapse>
        </>
    )
}