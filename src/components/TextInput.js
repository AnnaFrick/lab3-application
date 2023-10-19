
import React, { useState } from 'react'
import CharacterCounterComponent from './CharacterCounter'
import CharacterDisplayerComponent from './CharacterDisplayer'
import CharacterStatisticsComponent from './CharacterStatistics'
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
      <div className='text-input'>
        <h3>Type your text to analyze:</h3>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Enter text to analyze here..."
          rows="4"
          cols="50"
        ></textarea>
        <button onClick={handleSubmit}>Analyze</button>
      </div>
      {submittedText && (
        <div className="answer-container">
          <CharacterCounterComponent text={submittedText} />
          <CharacterDisplayerComponent text={submittedText} />
          <CharacterStatisticsComponent text={submittedText} />
        </div>
      )}
    </div>
  )
}

export default TextInput