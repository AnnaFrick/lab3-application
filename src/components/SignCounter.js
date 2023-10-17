import React from 'react'
import { SignCounter } from 'sign-analysis-module'
import '../SignCounter.css'

const SignCounterComponent = ({ text }) => {
  const counter = new SignCounter(text)

  return (
    <div className='signCounter'>
      <h4>Sign Counter</h4>
      <div className='results'>
      <div className='result-frame'>
        <p>Characters in text:</p>
        <h2>{counter.countSigns()}</h2>
      </div>
      <div className='result-frame'>
        <p>Vowels in the text:</p>
        <h2>{counter.countVowels()}</h2>
      </div>
      <div className='result-frame'>
        <p>Consonants in text:</p>
        <h2>{counter.countConsonants()}</h2>
      </div>
      <div className='result-frame'>
        <p>Other signs in text:</p>
        <h2>{counter.countOtherSigns()}</h2>
      </div>
      </div>
    </div>
  )
}

export default SignCounterComponent
