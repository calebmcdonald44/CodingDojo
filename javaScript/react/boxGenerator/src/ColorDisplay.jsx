import { useState } from 'react'

function ColorDisplay(props){


    return (
        <div className='container'>
            {
                props.colors.map((color, i) => 
                <div key={i} className='box' style={{backgroundColor: color}}></div>
                )
            }
        </div>
    )
}
export default ColorDisplay