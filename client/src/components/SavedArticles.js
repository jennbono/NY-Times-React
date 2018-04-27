import React, { Component } from "react";
import SavedArticle from "./SavedArticle";

class SavedArticles extends Component {
	render() {
		return (
			<div className="card-body">
				<h5 className="card-title">Title and Date of Article</h5>
				<p className="card-text">Summary of Article goes here...</p>
				<button className="btn btn-danger">Delete</button>
			</div>
		);
	}
}

export default SavedArticles;