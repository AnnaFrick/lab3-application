import React from 'react'
import { SignStatistics } from 'sign-analysis-module'
import '../SignCounter.css'

const SignStatisticsComponent = ({ text }) => {
  const stats = new SignStatistics(text)

  const renderCharacterCounts = (characterCounts) => (
    <div>
      {Object.entries(characterCounts).map(([character, count]) => (
        <p key={character}>
          <h3>{character} : {count}</h3> 
        </p>
      ))}
    </div>
  )


  return (
    <div className='signCounter'>
      <h4>Leader board of top 5</h4>
      <div className='results'>
      <div className='result-frame'>
        <h5>Total:</h5>
        {renderCharacterCounts(stats.getTopSigns())}
      </div>
      <div className='result-frame'>
        <h5>Vowels:</h5>
        {renderCharacterCounts(stats.getTopVowels())}
      </div>
      <div className='result-frame'>
        <h5>Consonants:</h5>
        {renderCharacterCounts(stats.getTopConsonants())}
      </div>
      <div className='result-frame'>
        <h5>Other characters:</h5>
        {renderCharacterCounts(stats.getTopOtherSigns())}
        </div>
      </div>
    </div>
  )
}

export default SignStatisticsComponent
