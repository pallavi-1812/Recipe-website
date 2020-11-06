import React,{ useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App.css';

function App() {

  const AppId = "704d26a2";
  const AppKey = "8ec8898a85b792657a15a980f909c748";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

 useEffect(() => {
     getRecipes();
 },[query]);

 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}&from=0&to=3&calories=591-722&health=alcohol-free`);
   const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
 };

 const changeSearch = (e) => {
   setSearch(e.target.value);
 };

 const getSearch = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
};

  return (
    <div className="App">
      <p>Enter any food item to get recipes related to that item!!</p>
      <form onSubmit={getSearch} className="searchForm">
        <input
          type="text"
          name="search"
          id="search"
          className="searchBar"
          value={search}
          onChange={changeSearch}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
          <Recipes 
          key={recipe.recipe.label}
          name={recipe.recipe.label}
          calories={recipe.recipe.calories.toFixed(2)}
          image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
