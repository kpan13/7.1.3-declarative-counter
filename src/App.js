import React, { useState } from 'react'
import './App.css'



function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
        <div>
            <h1>Hello!{counter}</h1>
            <h4>counting numbers{counter}</h4>
        </div>
    )
}

export default App;
