import React from "react";
import '../../App.css'

function Selections({selections}){
    let keys = Object.keys(selections)

    return (
        <ul className="selectionMap"> Selections
            {keys.map((selection) => {
                return (<li key={selection}>{selection}: {selections[selection]}</li>)
            })}
        </ul>
    )
}

export default Selections