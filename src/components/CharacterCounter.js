import React from 'react'
import { CharacterCounter } from 'character-analysis-module'
import '../CharacterComponent.css'

const CharacterCounterComponent = ({ text }) => {
  try {
    const counter = new CharacterCounter(text)

    return (
      <div className='character-component'>
        <h4>Counted characters</h4>
        <p>Your text provides this amount of...</p>
        <div className='results'>
          <div className='result-frame'>
            <p>Characters in total:</p>
            <h2>{counter.countCharacters()}</h2>
          </div>
          <div className='result-frame'>
            <p>Vowels:</p>
            <h2>{counter.countVowels()}</h2>
          </div>
          <div className='result-frame'>
            <p>Consonants:</p>
            <h2>{counter.countConsonants()}</h2>
          </div>
          <div className='result-frame'>
            <p>Other characters:</p>
            <h2>{counter.countOtherCharacters()}</h2>
          </div>
          <div className='result-frame'>
            <p>Words:</p>
            <h2>{counter.countWords()}</h2>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('An error occurred:', error)
    return (
      <div className='character-component'>
        <h4>An error occured: {error}</h4>
        <p>Please try again.</p>
      </div>
    )
  }
}

export default CharacterCounterComponent
