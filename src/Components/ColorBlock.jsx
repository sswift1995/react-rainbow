import React from "react";


export default function ColorBlock({color}){
    return <div className="ColorBlock"
    style={{'backgroundColor':color}}
    >
        <p>{color}</p>
    </div>


}