import React from 'react'
import styled from 'styled-components'

const Orange = styled.h1`
background-color:rgba(255,157,57,.78);
padding: 5px;
font-size: 1.5rem;
    `
export default (props)=>{
    return (
        <Orange>{props.children}</Orange>
    )
}