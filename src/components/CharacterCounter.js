import React from 'react'
import { CharacterCounter } from 'character-analysis-module'
import '../CharacterComponents.css'

const CharacterCounterComponent = ({ text }) => {
  const counter = new CharacterCounter(text)

  return (
    <div className='character-component'>
      <h4>Character Counter</h4>
      <div className='results'>
      <div className='result-frame'>
        <p>Total:</p>
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
      </div>
    </div>
  )
}

export default CharacterCounterComponent
