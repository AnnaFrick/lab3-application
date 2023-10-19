import React, { useState } from 'react';
import { CharacterDisplayer } from 'character-analysis-module'
import '../CharacterComponent.css'

const CharacterDisplayerComponent = ({ text }) => {
  const displayer = new CharacterDisplayer(text)
  const [openSection, setOpenSection] = useState(null)

  const handleSectionClick = (sectionName) => {
    if (openSection === sectionName) {
      setOpenSection(null)
    } else {
      setOpenSection(sectionName)
    }
  }

  return (
    <div className="character-component">
      <h4>Display characters</h4>
      <p>Click on the category you'de like to display!</p>
      <div className="results">
        <div
          className={`result-frame ${openSection === 'content' ? 'open' : ''}`}
          onClick={() => handleSectionClick('content')}
        >
          <h5>Text content</h5>
        </div>
        <div
          className={`result-frame ${openSection === 'vowels' ? 'open' : ''}`}
          onClick={() => handleSectionClick('vowels')}
        >
          <h5>Vowels</h5>
        </div>
        <div
          className={`result-frame ${openSection === 'consonants' ? 'open' : ''}`}
          onClick={() => handleSectionClick('consonants')}
        >
          <h5>Consonants</h5>
        </div>
        <div
          className={`result-frame ${openSection === 'otherCharacters' ? 'open' : ''}`}
          onClick={() => handleSectionClick('otherCharacters')}
        >
          <h5>Other characters</h5>
        </div>
      </div>
      <p className='display-characters'>
        {openSection === 'content' && <p>{displayer.showContent()}</p>}
        {openSection === 'vowels' && <p>{displayer.showVowels()}</p>}
        {openSection === 'consonants' && <p>{displayer.showConsonants()}</p>}
        {openSection === 'otherCharacters' && <p>{displayer.showOtherCharacters()}</p>}
      </p>
    </div>
  )
}

export default CharacterDisplayerComponent
