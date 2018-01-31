import React from 'react';
import { NavLink } from 'react-router-dom';

export class CategoriesPage extends React.Component {
  start = () => {
    
    var selectedOption = document.getElementById('category-slect');
    this.props.history.push(`/play/${selectedOption.value}`)
  }
  render() {
    return (
      <div className="categories">
        <div className="container">
          <h3>Select a category</h3>
          <select className="select" id="category-slect">
            <option value="Football">Football</option>
            <option value="CS:GO">CS:GO</option>
          </select>
          <button className="btn btn--start" onClick={this.start}>Start game</button>
        </div>
      </div>
    );
  }
};

export default CategoriesPage;