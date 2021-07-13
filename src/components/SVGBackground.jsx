import React from 'react'
import styled from 'styled-components'
import MountainOne from  './mountain-1.svg'
import MountainTwo from  './mountain-2.svg'
import MountainThree from  './mountain-3.svg'
import TreeOne from './tree-1.svg'

const SVGWrap = styled.g`
    
`
const Wrapper = styled.svg`
width:120%;
max-width:1200px;
margin-left:auto;
margin-right:auto

`
export default function SVGBackground(){
    
return(
    <Wrapper viewBox='0 0 1200 400'>
    <g transform='translate(50,100)' >
            <MountainOne x='300' width='50em'   />
            <MountainTwo x='-150' width='40em' />
        
            <TreeOne y='45' x='80' height='16em' fill='#1F5813' />
            <TreeOne y='110' x='-200' height='12em' fill='#1F5813' />
            <TreeOne y='45' x='-250' height='16em' fill='#1F5813' />
            <TreeOne y='110' height='12em' fill='#1F5813' />
            </g>
        </Wrapper>
)
}

