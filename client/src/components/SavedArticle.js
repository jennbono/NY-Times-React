import React, { Component } from "react";
import API from "../Utils/API";

class SavedArticle extends Component {
	render() {
		return (
			<div className="card-body">
				<h5 className="card-title">Title and Date of Article</h5>
				<p className="card-text">Summary of Article goes here...</p>
				<button className="btn btn-danger" onClick={this.deleteArticle}>Delete</button>
			</div>
		);
	}
	deleteArticle () {
		API.deleteArticle().then(this.data)
		console.log(this.data);
	}
}

export default SavedArticle;