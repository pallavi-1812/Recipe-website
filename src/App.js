import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import { Form, FormGroup, Input } from "reactstrap";
import "./App.css";

function App() {
  const AppId = process.env.REACT_APP_APP_ID;
  const AppKey = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("almond");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
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
    setSearch("");
  };

  return (
    <div className="app">
      <div className="header">
        <h2 className="fline">Enter any food item to get some recipes!</h2>
      </div>
      <div className="container">
        <Form onSubmit={getSearch} className="searchForm">
          <FormGroup>
            <div className="row">
              <Input
                type="text"
                name="search"
                id="search"
                className="form-control col-10"
                placeholder="Search.."
                value={search}
                onChange={changeSearch}
              />
              <Input type="submit" className="col-1 ml-1 btn btn-primary" />
            </div>
          </FormGroup>
        </Form>
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            name={recipe.recipe.label}
            ingd={recipe.recipe.ingredientLines.join()}
            caution={recipe.recipe.cautions.join()}
            HealthL={recipe.recipe.healthLabels.join()}
            calories={recipe.recipe.calories.toFixed(2)}
            image={recipe.recipe.image}
          />
        ))}
      </div>
      <div className="footer">
        Coded by :{" "}
        <a href="https://github.com/pallavi-1812"> Pallavi Upadhyay</a>
      </div>
    </div>
  );
}

export default App;
