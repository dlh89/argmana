import React from 'react';

const CategoriesPage = () => (
  <div className="categories">
    <div className="container">
      <h3>Select a category</h3>
      <select className="select">
        <option value="Football">Football</option>
        <option value="CS:GO">CS:GO</option>
      </select>
      <button className="btn btn--start">Start game</button>
    </div>
  </div>
);

export default CategoriesPage;