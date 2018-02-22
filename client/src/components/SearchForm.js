import React, { Component } from "react";

class SearchForm extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form className="search-form">
							<h2>Search</h2>
							<div className="form-group">
								<label forHtml="exampleInputEmail1"></label>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Topic" />
							</div>
							<div className="form-group">
								<label forHtml="exampleInputPassword1"></label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Start Year" />
							</div>
							<div className="form-group">
								<label forHtml="exampleInputPassword1"></label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="End Year" />
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchForm;