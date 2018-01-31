import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Categories from './Categories';
//import Players from './../../public/players.json';
import Football from './../../public/football.json';

export default class QuizPage extends React.Component {
  constructor(props) {
    super(props);
    this.generateAnagram();
  }
  state = {
    word: undefined,
    anagram: "",
    answer: undefined,
    result: undefined
  }
  generateAnagram() {
    // reset the anagram
    if (this.state.anagram) {
      this.state.anagram = "";
    }

    // choose a random year, position and player and set as the word
    let year = Object.keys(Football.year)[Math.floor(Math.random() * Object.keys(Football.year).length)]
    let position = Math.floor(Math.random() * Football.year[year].length)
    this.state.word = Football.year[year][position].Player

    // copy the word into a tempWord array
    let tempWord = []
    for (let i = 0; i < this.state.word.length; i++) {
      tempWord.push(this.state.word[i])
    }

    this.state.anagram = "";
    /* // one word version
    for (let i = 0; i < this.state.word.length; i++) {
      let letterIndex = Math.floor(Math.random() * tempWord.length)
      this.state.anagram += tempWord[letterIndex]
      tempWord.splice(letterIndex, 1)
    }
    */
    // seperate the words
    var words = this.state.word.split(" ");

    words.forEach((word) => {
      var tempArr = word.split("");

      for (var i = 0; i < word.length; i++) {
        // add random letter from word to anagram
        var letterIndex = Math.floor(Math.random() * tempArr.length);
        this.state.anagram += tempArr[letterIndex];
        // remove the used letter from tempArr so it can't be reused
        tempArr.splice(letterIndex, 1);

        // add a space after last letter of word
        if (i == word.length-1) {
          this.state.anagram += " ";
        }
      }
    })
  }
  checkAnswer = (e) => {
    e.preventDefault();
    if (this.state.word.toLowerCase() === this.state.answer.toLowerCase()) {
      this.setState({result: "Correct!"});
      this.generateAnagram();
      document.getElementById("inputForm").reset();
    } else {
      this.setState({result: "Try again."});
    }
  }
  handleChange = (e) => {
    this.setState({answer: e.target.value});
  }
  skip = () => {
    this.setState({result: "The answer was " + this.state.word})
    document.getElementById("inputForm").reset();
    this.generateAnagram();
  }

  render() {
    return (
      <div>
      <Question anagram={this.state.anagram}/>
      <Answer checkAnswer={this.checkAnswer} result={this.state.result} handleChange={this.handleChange} skip={this.skip} />
    </div>
    )
  }
}