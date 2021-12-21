import React from "react";
const Recipe = ({ recipe, index }) => {
	return (
		recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
			<div className="card" key={index}>
				<img
					src={recipe["recipe"]["image"]}
					alt=""
					onClick={() => {
						window.open(recipe["recipe"]["url"]);
					}}
				/>
				<h3>{recipe["recipe"]["label"]}</h3>
			</div>
		)
	);
};

export default Recipe;
