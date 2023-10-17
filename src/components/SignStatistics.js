import React from 'react'
import { SignStatistics } from 'sign-analysis-module'

const SignStatisticsComponent = ({ text }) => {
  const stats = new SignStatistics(text)

  return (
    <div>
      <h4>Sign Statistics</h4>
      <p>Top 5 signs that are used in the text: {stats.getTopSigns()}</p>
      <p>Top 5 vowels in text: {stats.getTopVowels()}</p>
      <p>Top 5 consonants in text: {stats.getTopConsonants()}</p>
      <p>Top 5 other signs in text: {stats.getTopOtherSigns()}</p>
    </div>
  );
}

export default SignStatisticsComponent
