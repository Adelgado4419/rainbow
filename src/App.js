import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import Colorform from './ColorForm'


function App(){
    let [colors, setColors] = useState ([
       
    ])
function checkColor(){
    supports(propertyName, propertyValue)
}    

let colorsMap = colors.map((color, i) => {
    return (
        <ColorBlock color={color} />
    )
})

const addColor = (newColor) => {
    setColors([...colors, newColor])
}

    return (
        <div className="App">
            {/* {colorsMap} */}
            {colors.map((color, i) => 
                <ColorBlock key={i} color = {color} />)}
            <Colorform addColor={addColor}/>
        </div>


    )
}

export default App