import React from 'react'
import SectionIcon from './SectionIcon.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align:center;
`
export default function SectionHeader(props){
    return(
        <Wrapper>
            <SectionIcon {...props} />
            {props.children}
        </Wrapper>
        
    )
}