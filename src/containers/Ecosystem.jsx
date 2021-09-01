import React, {useState} from 'react'
import SVGBackground from '../components/SVGBackground'
import OrangeHeader from '../components/OrangeHeader'
import {Container, Row, Col, Collapse} from 'reactstrap'
import styled from 'styled-components'
const BackgroundWrap = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    height:calc(90vh - 99px);
    width: 100%;
    min-height:400px;
    z-index: 0;
    overflow-x:hidden;
`
const BackgroundContainer = styled.div`
position: relative;
top: 0px;
left: 0px;
width:100%;
z-index: -1;
`
const AutoVideo = styled.video`
width: 100%;
height: calc(90vh - 99px);
object-fit: cover
`
export default function Ecosystem(){
    var [collapse, setCollapse] = useState(false)
    return(
        <>
        <Container fluid  style={{  overflowX:'hidden', overflowY: 'hidden', zIndex: '-1', padding: '0px'}}>
        <a id='ecosystem' style=
        {{position:'relative',
        top: '-200px'}}
    />
            <Row style={{ color:'#fef9ef', minHeight:'400px', height:'calc(90vh - 99px)', position:'absolute', padding: '20px', background: 'rgba(0,0,0,.4)', width:'105%'}}>
        <Col  md='6' style={{paddingTop:'15vw'}}>
        <OrangeHeader>3. Georgia’s unique ecosystems are under threat.</OrangeHeader>
        <p>
        Georgia is home to species found nowhere else.

        </p>
        <p>
        Climate change will disrupt Georgia’s ecological communities at all scales.

        </p>
        <p>
        These changes threaten the ability of our natural systems to provide clean water, protect us from storms, store carbon, and provide recreational opportunities.

        </p>
</Col>
<Col md='3' />


                    
            </Row>
           
            


        <BackgroundContainer>
        <AutoVideo autoPlay muted loop >
                <source src="wp-content/themes/licenseplate/assets/video/pines.mp4" type="video/mp4" />
            </AutoVideo>
        </BackgroundContainer>
            
        </Container>
        
                </>
    )
}