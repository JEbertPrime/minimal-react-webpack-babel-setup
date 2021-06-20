import {IoMdFlame} from "react-icons/io"
import {GiBigWave} from 'react-icons/gi'
import {ImLeaf} from 'react-icons/im'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 10px;
    border: 2px solid black;
    border-radius: 50%;
    width:50px;
    height:50px;
    align-content: center;
    display: flex;
    margin:auto;
`

export default function SectionIcon({section, color}){
    const Icon = section == 'coast' ? GiBigWave : section == 'heat' ? IoMdFlame : ImLeaf
    

    return (
        <Wrapper>
        <Icon size='10x' fill={color} />


        </Wrapper>
    )
}