import React from 'react';

const Recipes = ({name,calories,image}) => {
    return(
        <div>
            <h2>Title: <span>{name}</span> </h2>
            <h2>Calories: <span>{calories} &nbsp; kcal</span> </h2>
            <img alt={name} src={image} />
        </div>
    );
}

export default Recipes;