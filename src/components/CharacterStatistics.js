import React from 'react'
import { CharacterStatistics } from 'character-analysis-module'
import ChartComponent from './StatisticsChart'
import '../CharacterComponents.css'

const CharacterStatisticsComponent = ({ text }) => {
  const stats = new CharacterStatistics(text)

  const renderCharacterCounts = (characterCounts) => (
    <div>
      {Object.entries(characterCounts).map(([character, count]) => (
        <p key={character}>
          <span className="character">{character}</span> : <span className="count">{count}</span>
        </p>
      ))}
    </div>
  )


  return (
    <div className='character-component'>
      <h4>Leader board of top 5</h4>
      <div className='results'>
        <div className='result-frame'>
          <h5>Total:</h5>
          {renderCharacterCounts(stats.getTopCharacters())}
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
          {renderCharacterCounts(stats.getTopOtherCharacters())}
        </div>
      </div>
      <div className='chart-container'>
        <ChartComponent characterCounts={stats.getTopCharacters()} />
      </div>
      <div className='chart-container'>
        <ChartComponent characterCounts={stats.getTopVowels()} />
      </div>
      <div className='chart-container'>
        <ChartComponent characterCounts={stats.getTopConsonants()} />
      </div>
    </div>

  )
}

export default CharacterStatisticsComponent
