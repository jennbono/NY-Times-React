import React, { Component } from "react";

class Delete extends Component {
	render() {
		return (
			<div className="card-body">
				<h5 className="card-title">Title and Date of Article</h5>
				<p className="card-text">Summary of Article goes here...</p>
				<a href="#" className="btn btn-danger">Delete</a>
			</div>
		);
	}
}

export default Delete;