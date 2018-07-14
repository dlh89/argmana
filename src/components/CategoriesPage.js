import React from "react";

export class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };
  }
  componentDidMount() {
    this.setState({
      selectedOption: document.querySelector(".select").value
    });
  }
  onStart() {
    this.props.history.push(`/play/${this.state.selectedOption}`);
  }
  categorySelect(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }
  switchDescription(category) {
    switch (category) {
      case "Football":
        return "Test your football knowledge with anagrams of the top 3 players in the Ballon d'Or for each year from the award's inception in 1956 up until the present day.";
      case "Tennis":
        return "Test your tennis knowledge with anagrams of the top 100 players of all time determined by an international panel of tennis experts. The list contains 62 men and 38 women.";
      case "CounterStrike":
        return "Test your old-school Counter-Strike knowledge with anagrams of the top 100 highest earning players in the game from version 1.0 to 1.6.";
      case "CS:GO":
        return "Test your Counter-Strike: Global Offensive knowledge with anagrams of the top 100 highest earning players in the history of the game.";
      case "Films":
        return "Test your film knowledge with anagrams of the top 200 highest-grossing films of all time.";
      default:
        return "Please select a category";
    }
  }
  render() {
    return (
      <div className="categories">
        <div className="container u-padding-bottom-large">
          <h3>Select a category</h3>
          <select
            className="select u-margin-top-tiny"
            onChange={this.categorySelect.bind(this)}
          >
            <option value="Football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="CounterStrike">Counter-Strike (1.0 - 1.6)</option>
            <option value="CS:GO">CS:GO</option>
            <option value="Films">Films</option>
          </select>
          <button className="btn btn--start" onClick={this.onStart.bind(this)}>
            Start game
          </button>
          <p className="info u-margin-top-small">
            {this.switchDescription(this.state.selectedOption)}
          </p>
        </div>
      </div>
    );
  }
}

export default CategoriesPage;
