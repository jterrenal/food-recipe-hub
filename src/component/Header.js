import React, { useState } from "react";
import Footer from "./Footer";
import Recipe from "./Recipe";
import "./style.css";
import Axios from "axios";

const Header = () => {
	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState("");
	const [healthLabel, setHealthLabel] = useState("vegan");

	const url = `${process.env.REACT_APP_URL}/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&health=${healthLabel}`;
	const getRecipeInfo = async () => {
		await Axios.get(url).then((res) => {
			setRecipes(res.data.hits);
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		getRecipeInfo();
	};

	return (
		<>
			<div className="header">
				<div className="container">
					<div className="header-content">
						<h2>
							Food Recipe Hub <span className="emoji">🍲</span>
						</h2>
					</div>
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<input
								type="text"
								placeholder="Type the ingridient"
								autoComplete="Off"
								className="app__search"
								value={query}
								onChange={(e) => {
									setQuery(e.target.value);
								}}
							/>
							<select
								onChange={(e) => {
									setHealthLabel(e.target.value);
								}}
								name="category"
								id="category"
							>
								<option value="vegan">Vegan</option>
								<option value="vegetarian">Vegetarian</option>
								<option value="low-sugar">Low Sugar</option>
								<option value="dairy-free">Dairy - free</option>
								<option value="immuno-supportive">Immuno-Supportive</option>
								<option value="wheat-free">Wheat-free</option>
							</select>
							<button className="btn">Get Recipe</button>
						</div>
					</form>
				</div>
			</div>
			<section className="recipeSection">
				<div className="recipe-container">
					{recipes.map((recipe, index) => {
						return <Recipe recipe={recipe} key={index} />;
					})}
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Header;
