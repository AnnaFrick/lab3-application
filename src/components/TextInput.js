
import React, { useState } from 'react'
import SignCounterComponent from './SignCounter'
import SignDisplayerComponent from './SignDisplayer'
import '../TextInput.css'

const TextInput = () => {
  const [inputText, setInputText] = useState('')
  const [submittedText, setSubmittedText] = useState('')

  const handleTextChange = (event) => {
    setInputText(event.target.value)
  }

  const handleSubmit = () => {
    setSubmittedText(inputText)
  }


  return (
    <div className='text-input-container'>
        <h3>Choose your text to analyze:</h3>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Enter text to analyze here..."
          rows="4"
          cols="50"
        ></textarea>
      <button onClick={handleSubmit}>Submit</button>

      {submittedText && (
        <div className="answer-container">
          <SignCounterComponent text={submittedText} />
          <SignDisplayerComponent text={submittedText} />
        </div>
      )}
    </div>
  )
}

export default TextInput