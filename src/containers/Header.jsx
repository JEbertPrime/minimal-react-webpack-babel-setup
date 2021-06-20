import React, {useEffect, useState} from 'react'
import SectionIcon from '../components/SectionIcon.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
const Sticky = styled.div`
    position:sticky;
    top:100px;
    background:white;
    z-index:1
`
const Link = styled.a`
    text-decoration:none;
    color:black;
    &:hover{
        text-decoration: none;
        color:#FC801E;
    }
`
const StyledRow = styled(Row)`
    padding:2rem;
    `
const ProgressBar = styled.hr`
     margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #FC801E;
  width:${props=> props.width + "%"};
  max-width: 99.9%;
  transition: width .1s;
  margin-left: 0px;
`

export default function Header (props){
    var [scrollPercent, changeScrollPercent] = useState(0)
     
    useEffect(()=>{
        window.onscroll = function() {myFunction()};

        function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        changeScrollPercent((winScroll / height) * 100) ;
        }
    }, [])
    return(
        <Sticky>
        <Container  style={{padding:'0px'}}>
        <StyledRow>
            {[['coast', 'Sea Level Rise',' #00147D'], ['heat', 'Extreme Heat', '#CE2028'], ['ecosystem', 'Threatened Ecosystems',' #03C03D']].map(section=>(
                <Col>
                <SectionHeader section={section[0]} color={section[2]}>
                <Link href={`#${section[0]}`}>
                    <h3>{section[1]}</h3>
                    </Link>
                </SectionHeader>
                </Col>
                
            ))}
            
            </StyledRow>
            

        </Container>
        <ProgressBar width={scrollPercent}/>
        </Sticky>
    )
}