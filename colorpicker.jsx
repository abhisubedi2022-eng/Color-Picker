import React, {useState} from 'react'

function ColorPicker(){
    
    const [color, setColor] = useState();

    const updateColorChange = (event) => {
        setColor(event.target.value);
    }

    return(<div class="color-container">
        <h1>Color Picker</h1>
        <div className='color-display' style = {{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label className="">Selcet </label>
        <input value = {color} type="color" onChange={updateColorChange}/>
        <p></p>
    </div>);
}
export default ColorPicker