
import React from 'react'
import styled from 'styled-components'
const Image = styled.img`
    opacity:${props=>props.opacity};
    position:fixed;
    width:100vw;
`
const Wrapper = styled.div`
    height:550px;
`
export default function Graphic({level}){
    return(
        <Wrapper>
            {[0,1,2,3,4,5,6].map(rise=>{
                return(
                    <Image  src={`/wp-content/uploads/2021/06/layer_${rise}.png`} z={rise} opacity={level == rise ? 1:0} />
                )
            })}
        </Wrapper>
    )
}