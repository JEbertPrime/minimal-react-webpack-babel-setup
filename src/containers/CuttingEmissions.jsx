import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from 'styled-components'
const Link =styled.a`
color:#FC801E;
&:hover{
    color:#FC801E;
}
`
export default function CuttingEmissions (){
    return(
        <Container>
            <Row>
                <Col center>
                    <h3 className='center' style={{marginTop:'3em'}}>
                        The problems are big - but  the solutions can be small.
                    </h3>
                    <hr/>
                </Col>
                
            </Row>
            <Row>
                <Col>
                <img src='/wp-content/uploads/2021/06/drawdown.png' width='100%'/>

                    <h4>
                        <Link href='http://drawdownga.org'>Drawdown GA</Link>
                    </h4>
                    <p>
                        Drawdown GA is working towards a zero-emissions Georgia.
                    </p>
                </Col>
                <Col>
                <img src='/wp-content/uploads/2021/06/georgia-climate-stories.jpg' width='100%'/>

                <h4>
                        <Link href='http://drawdownga.org'>Climate Stories</Link>
                    </h4>
                    <p>
                        People around the state are developing new ways to prevent climate change and adapt to its effects.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}