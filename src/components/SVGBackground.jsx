import React from 'react'
import styled from 'styled-components'
import MountainOne from  './mountain-1.svg'
import MountainTwo from  './mountain-2.svg'
import MountainThree from  './mountain-3.svg'
import TreeOne from './tree-1.svg'

const SVGWrap = styled.div`
    position:absolute;
    bottom:0px;
    ${props=>{
        return props.left ? `
                             margin-left: ${props.left}em;   `
                             :
                             props.right ? `margin-left:calc(100vw - ${props.right}em);
                             `
                             :null
    }}
    z-index:-1
`
const Wrapper = styled.div`
height:100%;
`
export default function SVGBackground(){
    
return(
    <Wrapper>
        <SVGWrap top={20} left={0}>
            <MountainOne width='40em'  />
        </SVGWrap>
        <SVGWrap top={20} right={43}>
            <MountainTwo width='40em' />
        </SVGWrap>
        
        <SVGWrap top={21} right={35}>
            <TreeOne height='16em' fill='#1F5813' />
        </SVGWrap>
        <SVGWrap top={21} right={27}>
            <TreeOne height='12em' fill='#1F5813' />
        </SVGWrap>
        <SVGWrap top={21} left={35}>
            <TreeOne height='16em' fill='#1F5813' />
        </SVGWrap>
        <SVGWrap top={21} left={27}>
            <TreeOne height='12em' fill='#1F5813' />
        </SVGWrap>
        </Wrapper>
)
}

