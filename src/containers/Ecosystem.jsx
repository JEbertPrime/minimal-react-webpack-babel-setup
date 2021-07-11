import React, {useState} from 'react'
import SVGBackground from '../components/SVGBackground'
import {Container, Row, Col, Collapse} from 'reactstrap'
import styled from 'styled-components'
const BackgroundWrap = styled.div`
    position: absolute;
    height:calc(90vh - 99px);
    min-height:400px;
    z-index: 0
`
export default function Ecosystem(){
    var [collapse, setCollapse] = useState(false)
    return(
        <>
        <Container fluid  style={{ background:' rgb(86, 144, 58)'}}>
        <a id='ecosystem' style=
        {{position:'relative',
        top: '-200px'}}
    />
            <Row style={{ color:'#fef9ef', minHeight:'400px', height:'calc(90vh - 99px)'}}>
                <Col md='3'></Col>
        <Col className='text-center' style={{paddingTop:'10em'}}>
        <h2>Georgia’s unique ecosystems are under threat.</h2>
        <p>
        Georgia’s is home to species found nowhere else.

        </p>
        <p>
        Climate change will disrupt Georgia’s ecological communities at all scales.

        </p>
        <p>
        These changes threaten the ability of our natural systems to provide clean water, protect us from storms, store carbon, and provide recreational opportunities.

        </p>
</Col>
<Col md='3' />


<BackgroundWrap>

                    <SVGBackground />
                    <div className='bird-container bird-container--one'>
    <div className='bird bird--one'/>
</div>
                    </BackgroundWrap>
                    
            </Row>
           
            <div style={{position:'absolute', left:'50%', color:'#fef9ef'}}>
                        <div style={{position:'relative', left:'-50%', marginTop:'-50px', cursor:'pointer'}}>
                        <h3 onClick={()=>setCollapse(!collapse)}>Read More</h3>

                        </div>
        </div>
                


        

        </Container>
        <Collapse isOpen={collapse} style={{backgroundColor:'white'}}>
        <Container>
        <Row style={{paddingTop:'20px'}}>
            <Col>
            <h2 >Information Portal</h2>
            <p>Georgia’s ecosystems are home to incredible biological diversity including species found nowhere else in the country [1]. They also provide clean water, protect us from storms, store carbon, and provide recreational opportunities.
Climate change will disrupt Georgia’s ecological communities at all scales, from individual species to the functioning of entire systems. For example, shrimp populations will be more vulnerable to disease [2], freshwater fish like trout and darters will lose habitat as a result of warming waters and variable water levels [3], and wetland habitats will be threatened by drought and other stressors.</p>
</Col>
<Col>
<iframe width="560" height="315" src="https://www.youtube.com/embed/6kw1ccbr7Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Col>
        </Row>
        
        </Container>
        
                </Collapse>
                </>
    )
}