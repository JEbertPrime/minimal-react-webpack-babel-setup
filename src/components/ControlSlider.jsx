import React from 'react'

export default function ControlSlider({changeRise}){
    return(
        <input type='range' min="0" max="4" step="1" defaultValue='0' onChange={(e)=>changeRise(parseInt(e.target.value))}/>
    )
}