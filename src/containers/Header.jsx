import React, {useEffect, useState} from 'react'
import SectionIcon from '../components/SectionIcon.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import styled from 'styled-components'
import {device} from '../media/devices'
import {Container, Row, Col} from 'reactstrap'
const Sticky = styled.div`
    position:sticky;
    @media ${device.mobileS}{
        top: 10px;
    }
    @media ${device.tablet}{
        top: 50px
    }
    background:white;
    z-index:1;
    overflow-x:hidden;
    overflow-y:hidden
`
const Link = styled.a`
    text-decoration:none;
    color:${props=>props.active ? '#FC801E' : 'black'};
    &:hover{
        text-decoration: none;
        color:#FC801E;
    }
`
const StyledRow = styled(Row)`
    padding:1rem 0rem 0rem 0rem;
    `
const ProgressBar = styled.hr`
position:absolute;
  border: 0;
  border-top: 4px solid #FC801E;
  margin-top:6px;
  width:${props=> props.width + "%"};
  max-width: 99.9%;
  transition: width .1s;
  margin-left: 0px;
`
const HeaderCol = styled(Col)`
    @media ${device.mobileS}{
        display: ${props=>props.inView ? 'block': 'none'};
    }
    @media ${device.tablet}{
        display: block;
    }
`
export default function Header (props){
    var [scrollPercent, changeScrollPercent] = useState(0)
     
    useEffect(()=>{
        window.onscroll = function() {myFunction()};

        function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        changeScrollPercent(((winScroll / height) * 100) - 10) ;
        }
    }, [])
    return(
        <Sticky>
        <Container  style={{padding:'0px'}}>
            <Row>
                <Col md='7' className='mx-auto'>
                    <h2 className='center'>Impacts</h2>
                </Col>
                <Col center>
                    <h2 className='center'>Solutions</h2>
                </Col>
            </Row>
        <StyledRow>
            {[['coast', 'Sea Level Rise',' #00147D'], ['heat', 'Extreme Heat', '#CE2028'], ['ecosystem', 'Threatened Ecosystems',' #03C03D'], ['emissions','Cutting Emissions', '#000000'], ['resilience', 'Building Resilience', '#000000']].map((section, i)=>(
                <HeaderCol className='my-auto' style={{borderRight: section[0]=='ecosystem' ? '1px solid grey' : '',}} inView={scrollPercent>i*20 && scrollPercent<(i+1)*20}>
                <SectionHeader section={section[0]} color={section[2]}  >
                <Link href={`#${section[0]}`} active={scrollPercent>i*20 && scrollPercent<(i+1)*20}>
                    <h4>{section[1]}</h4>
                    </Link>
                </SectionHeader>
                </HeaderCol>
                
            ))}
            
            </StyledRow>
            

        </Container>
        <ProgressBar width={scrollPercent}/>
        <hr style={{marginBottom:'0px'}}/>
        </Sticky>
    )
}