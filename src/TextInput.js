
import React, { useState } from 'react';

const TextInput = () => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    }


    return (
        <div>
            <h3>Choose your text to analyze:</h3>
            <textarea
                value={inputText}
                onChange={handleTextChange}
                placeholder="Enter text to analyze here..."
                rows="4"
                cols="50"
            ></textarea>
            <button>Submit</button>
        </div>
    )
}

export default TextInput;