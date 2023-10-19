import React, { useState } from 'react';
import { CharacterDisplayer } from 'character-analysis-module'
import '../CharacterComponents.css'

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
      <h4>Character Displayer</h4>
      <div className="results">
        <div
          className={`result-frame ${openSection === 'content' ? 'open' : ''}`}
          onClick={() => handleSectionClick('content')}
        >
          <p>Text content</p>
        </div>
        <div
          className={`result-frame ${openSection === 'vowels' ? 'open' : ''}`}
          onClick={() => handleSectionClick('vowels')}
        >
          <p>Vowels in text</p>
        </div>
        <div
          className={`result-frame ${openSection === 'consonants' ? 'open' : ''}`}
          onClick={() => handleSectionClick('consonants')}
        >
          <p>Consonants in text</p>
        </div>
        <div
          className={`result-frame ${openSection === 'otherCharacters' ? 'open' : ''}`}
          onClick={() => handleSectionClick('otherCharacters')}
        >
          <p>Other characters</p>
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
