import styled from 'styled-components'
import React, {useState} from 'react'
const Info =  styled.div`
    color:rgba(255,255,255,.8);
    cursor:pointer;
    h6 {&:before{
        padding-right: 10px;
      font-family: "FontAwesome";
      font-size: 20px;
      align-self: center;
      content: "\f05a"
    }   }
    p{
        font-size:medium;
        visibility:${props=> props.open ? 'visible' : 'hidden'};
  opacity: ${props=> props.open ? '1' : '0'};
  transition: visibility 0s, opacity 0.35s linear;
  color:rgba(255,255,255,1);

    }
`
export default function(props){
    var [open, setOpen] = useState(false)
    const toggle = ()=>{
        setOpen(!open)
        console.log('toggle')
    }
    return(
        <Info open={open} onClick={toggle}{ ...props}>
            {props.children}
        </Info>
    )

}