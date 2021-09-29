import React, {useState} from 'react'
import SVGBackground from '../components/SVGBackground'
import OrangeHeader from '../components/OrangeHeader'
import EcoContainer from '../components/SectionContainer'
import MoreInfo from '../components/MoreInformation'
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
position: absolute;
top: 0px;
left: 0px;
width:100%;
z-index: -1;
`
const AutoVideo = styled.video`
object-fit: cover;
min-width: 100%;
@media(min-width:768px){
    height: calc(100vh - 99px);
  }
  min-height: 100%;
`
const GradientDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
      background: rgba(0,0,0,.3);

  
  @media (max-width: 768px) {
    background: rgba(0,0,0,.3)
  ;
  }
  z-index: 0;
`;
export default function Ecosystem(){
    var [collapse, setCollapse] = useState(false)
    return(
        <>
        <EcoContainer fluid  style={{  overflowX:'hidden', overflowY: 'hidden', zIndex: '1', padding: '0px'}}>
        <a id='ecosystem' style=
        {{position:'relative',
        top: '-200px'}}
    />
            <Row style={{ color:'#fef9ef', minHeight:'400px',  position:'relative', padding: '5em 0em 0em', width:'100%'}}>
        <Col  md='6' style={{marginLeft: '15px'}} >
        <OrangeHeader>2. Georgia’s unique ecosystems are under threat.</OrangeHeader>
        <p>
        Georgia is home to species found nowhere else.

        </p>
        <p>
        Climate change will disrupt Georgia’s ecological communities at all scales.

        </p>
        <p>
        These changes threaten the ability of our natural systems to provide clean water, protect us from storms, store carbon, and provide recreational opportunities.

        </p>
        <MoreInfo>
            <h6>Information about this video</h6>
            <p>This video shows a forest of longleaf pine, a tree endemic to the southeast's coastal regions.</p>
        </MoreInfo>
</Col>
<Col md='3' />


                    
            </Row>
           
            


        <BackgroundContainer>
        <GradientDiv />
        <AutoVideo autoPlay muted loop >
                <source src="wp-content/themes/licenseplate-2021/assets/video/pines.mp4" type="video/mp4" />
            </AutoVideo>
        </BackgroundContainer>
            
        </EcoContainer>
        
                </>
    )
}