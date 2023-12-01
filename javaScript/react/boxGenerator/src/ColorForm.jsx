import { useState } from 'react'



function ColorForm(props) {
    const {updateColors} = props
    const [inputColor, setInputColor] = useState("")
    const logColor = (e) => {
        e.preventDefault()
        updateColors(inputColor)
        setInputColor("")
    }

    return (
        <form onSubmit={logColor}>
            <label>Color</label>
            <input onChange={(e) => (setInputColor(e.target.value))} type="text" value={inputColor}/>
            <button>Add</button>
        </form>
    )
}
export default ColorForm