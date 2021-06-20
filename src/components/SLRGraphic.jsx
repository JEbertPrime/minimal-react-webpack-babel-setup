
import React from 'react'
import styled from 'styled-components'
const Image = styled.img`
    opacity:${props=>props.opacity};
    position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 6px black;
`
const Wrapper = styled.div`
    height:550px;
`
export default function Graphic({level}){
    return(
        <Wrapper>
            {[0,1,2,3,4].map(rise=>{
                return(
                    <Image  height='500px'src={`wp-content/uploads/2021/06/slr_${rise}.png`} z={rise} opacity={level == rise ? 1:0} />
                )
            })}
        </Wrapper>
    )
}