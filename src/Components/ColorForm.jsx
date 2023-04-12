import React, { useState } from "react";

export default function ColorForm(props) {
    let [inputColor, setInputColor] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        let { addToColors } = props;
        addToColors(inputColor)

    }
    return <div className="ColorForm">
        <form onSubmit={onSubmit}>
            <input type='text'
                onChange={e => setInputColor(e.target.value)}
            />
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
}