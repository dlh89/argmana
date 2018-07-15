import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import { replaceAccents } from "../helpers";
import Players from "./../../public/players.json";
import CounterStrike from "./../../public/counterstrike.json";
import Football from "./../../public/football.json";
import Tennis from "./../../public/tennis.json";
import Films from "./../../public/films.json";

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
  };
  generateAnagram() {
    // reset the anagram
    if (this.state.anagram) {
      this.state.anagram = "";
    }
    let randomIndex;
    switch (this.props.match.params.topic) {
      case "Football":
        // choose a random year, position and player and set as the word
        let year = Object.keys(Football.year)[
          Math.floor(Math.random() * Object.keys(Football.year).length)
        ];
        let position = Math.floor(Math.random() * Football.year[year].length);
        this.state.word = Football.year[year][position].Player;
        break;
      case "CS:GO":
        randomIndex = Math.floor(Math.random() * Players.players.length);
        this.state.word = Players.players[randomIndex];
        break;
      case "CounterStrike":
        randomIndex = Math.floor(Math.random() * CounterStrike.players.length);
        this.state.word = CounterStrike.players[randomIndex];
        break;
      case "Tennis":
        randomIndex = Math.floor(Math.random() * Tennis.players.length);
        this.state.word = Tennis.players[randomIndex];
        break;
      case "Films":
        randomIndex = Math.floor(Math.random() * Films.films.length);
        this.state.word = Films.films[randomIndex];
        break;
      default:
        this.state.word = "hello";
    }

    // copy the word into a tempWord array
    let tempWord = [];
    for (let i = 0; i < this.state.word.length; i++) {
      tempWord.push(this.state.word[i]);
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

    words.forEach(word => {
      var tempArr = word.split("");

      for (var i = 0; i < word.length; i++) {
        // add random letter from word to anagram
        var letterIndex = Math.floor(Math.random() * tempArr.length);
        this.state.anagram += tempArr[letterIndex];
        // remove the used letter from tempArr so it can't be reused
        tempArr.splice(letterIndex, 1);

        // add a space after last letter of word
        if (i == word.length - 1) {
          this.state.anagram += " ";
        }
      }
    });
  }
  checkAnswer = e => {
    e.preventDefault();
    // check if the answer matches the word or if the version of the word without the accents matches the answer
    if (
      this.state.word.toLowerCase() === this.state.answer.toLowerCase() ||
      replaceAccents(this.state.word.toLowerCase()) ===
        this.state.answer.toLowerCase()
    ) {
      this.setState({ result: "Correct!" });
      this.generateAnagram();
      document.getElementById("inputForm").reset();
    } else {
      this.setState({ result: "Try again." });
    }
  };
  handleChange = e => {
    this.setState({ answer: e.target.value });
  };
  skip = () => {
    this.setState({ result: `The answer was ${this.state.word}.` });
    document.getElementById("inputForm").reset();
    this.generateAnagram();
  };

  render() {
    return (
      <div>
        <Question
          topic={this.props.match.params.topic}
          anagram={this.state.anagram}
        />
        <Answer
          checkAnswer={this.checkAnswer}
          result={this.state.result}
          handleChange={this.handleChange}
          skip={this.skip}
        />
      </div>
    );
  }
}
