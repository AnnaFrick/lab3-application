# Analyzer Application

## Introduction
Welcome to the Text Analyzer! This web application built using Create React App that allows users to input text and analyze it using a custom `character-analysis-module` to count characters and words. 

## Features

**Input text for analysis:**

- Users can input text for analysis in the text area. By clicking on the button "Analyze", the text will be analyzed.

![Analyze counting](/img/analyze-count.png)

**Character count:**

- Users can see the number of different categories of characters in the text.
- Characters that are counted: total amount of characters, vowels, consonants and other characters (including numbers and punctuation).

**Word count:**

- Users can see the number of words in the text.

**Character statistics:**

- Users can see the top 5 most used characters in the text formatted as toplists and graphical charts.
- The toplists are rated: of all characters, vowels, consonants and other characters (including numbers and punctuation).

![Showing Toplists](/img/analyze-topfive.png)
![Showing Charts](/img/analyze-chart.png)
![Showing Charts](/img/analyze-chart2.png)

## Installation

To run this application locally, follow these steps:

Clone the repository:

    git clone https://github.com/AnnaFrick/lab3-application.git

Navigate to the project directory:

    cd text-analyzer

Install the required dependencies:

    npm install

## Usage

Start the development server:

    npm start

Open your web browser and go to http://localhost:3000 to use the Text Analyzer.

## Project Structure

The project is structured as follows:

- src/: Contains the source code for the application.
    - TextAnalyzer.js: The main component for the Text Analyzer.
    - CharacterCounter.js: Component for counting characters.
    - CharacterDisplayer.js: Component for displaying characters.
    - CharacterStatistics.js: Component for character statistics.
- character-analysis-module/: The custom module for character and word analysis.

## Additional Files

In the GitHub repository, you can these detailed find the following files: 

- [Kravspecifikation](https://github.com/AnnaFrick/lab3-application/wiki/Kravspecifikation): Document outlining the project requirements.
- [Projektvision](https://github.com/AnnaFrick/lab3-application/wiki/Projektvision): Document describing the project's vision.
- [Testfall](https://github.com/AnnaFrick/lab3-application/wiki/Testfall): Document with test cases for the project.

## Future Improvements

This could only be the beginning! Here are some ideas for future improvements:

- Add pages to the application for the different features.
- Add animations to the application.
- Add a feature that allows users to save their results.
- Develope a history feature that saves the user's previous inputs.
