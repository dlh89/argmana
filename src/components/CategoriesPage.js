import React from "react";

export class CategoriesPage extends React.Component {
  onStart() {
    var selectedOption = document.getElementById("category-slect");
    this.props.history.push(`/play/${selectedOption.value}`);
  }
  render() {
    return (
      <div className="categories">
        <div className="container">
          <h3>Select a category</h3>
          <select className="select" id="category-slect">
            <option value="Football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="CounterStrike">Counter-Strike (1.0 - 1.6)</option>
            <option value="CS:GO">CS:GO</option>
            <option value="Films">Films</option>
          </select>
          <button className="btn btn--start" onClick={this.onStart.bind(this)}>
            Start game
          </button>
        </div>
      </div>
    );
  }
}

export default CategoriesPage;
