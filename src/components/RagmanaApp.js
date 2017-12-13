import React from 'react';
import Header from './Header';
import Question from './Question';
import Answer from './Answer';

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
      'FalleN',
      'fer',
      'coldzera',
      'TACO',
      'Xyp9x',
      'dupreeh',
      'olofmeister',
      'NBK',
      'dev1ce',
      'neo',
      'TaZ',
      'pashaBiceps',
      'byali',
      'snax',
      'apEX',
      'kennyS',
      'karrigan',
      'Happy',
      'Kjaerbye',
      'GuardiaN',
      'flusha',
      'JW',
      'KRiMZ',
      'gla1ve',
      'GeT_RiGhT',
      'Xizt',
      'f0rest',
      'fnx',
      'shox',
      'Zeus',
      'cajunb',
      'friberg',
      'rain',
      'NiKo',
      'KIOSHIMA',
      'Edward',
      'seized',
      'boltz',
      'flamie',
      'Skadoodle',
      'tarik',
      'Rush',
      'Stewie2k',
      'dennis',
      'AdreN',
      'MSL',
      'Dosia',
      'SmithZz',
      'NAF-FLY',
      'felps',
      'SIXER',
      'stanislaw',
      'bodyy',
      'mou',
      'k0nfig',
      'pronax',
      'n0thing',
      'ScreaM',
      'shroud',
      'autimatic',
      'mixwell',
      'allu',
      'aizy',
      'HObbit',
      'RpK',
      'nitr0',
      's1mple',
      'ELiGE',
      'jdm64',
      'Magisk',
      'chrisJ',
      'RUBINO',
      'hen1',
      'Lucas',
      'hiko',
      'rallen',
      'MICHU',
      'szpero',
      'DD',
      'Mo',
      'mouz',
      'oskar',
      'somebody',
      'Furlan',
      'draken',
      'pyth',
      'seangares',
      'denis',
      'steel',
      'Fifflaren',
      'Valde',
      'moddii',
      'Maikelele',
      'Ex6TenZ',
      'REZ',
      'ANGE1',
      'fancy1',
      'twist',
      'nex',
      'AttackeR'      
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
    console.log(this.state.word)
    console.log(this.state.answer.toLowerCase())
    if (this.state.word.toLowerCase() === this.state.answer.toLowerCase()) {
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
  skip = () => {
    this.setState({result: "The answer was " + this.state.word})
    document.getElementById("inputForm").reset();
    this.generateAnagram();
  }

  render() {
    return (
      <div>
        <Header />
        <Question anagram={this.state.anagram}/>
        <Answer checkAnswer={this.checkAnswer} result={this.state.result} handleChange={this.handleChange} skip={this.skip} />
      </div>
    )
  }
}