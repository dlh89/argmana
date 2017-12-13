import React from 'react'
import Header from './Header'
import Question from './Question'
import Answer from './Answer'

export default class RagmanaApp extends React.Component {
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
    const words = 
    [
      'hello',
      'goodbye',
      'farewell',
      'welcome'
    ]
    this.state.word = words[Math.floor(Math.random() * words.length)]
    let tempWord = []
    for (let i = 0; i < this.state.word.length; i++) {
      tempWord.push(this.state.word[i])
    }
    this.state.anagram = "";
    for (let i = 0; i < this.state.word.length; i++) {
      let letterIndex = Math.floor(Math.random() * tempWord.length)
      this.state.anagram += tempWord[letterIndex]
      tempWord.splice(letterIndex, 1)
    }
  }
  checkAnswer = (e) => {
    e.preventDefault();
    if (this.state.word === this.state.answer.toLowerCase()) {
      this.setState({result: "Correct!"});
      this.generateAnagram();
      console.log(e.target)
      document.getElementById("inputForm").reset();
    } else {
      this.setState({result: "Try again."});
    }
  }
  handleChange = (e) => {
    this.setState({answer: e.target.value});
  }

  render() {
    return (
      <div>
        <Header />
        <Question anagram={this.state.anagram}/>
        <Answer checkAnswer={this.checkAnswer} result={this.state.result} handleChange={this.handleChange} />
      </div>
    )
  }
}