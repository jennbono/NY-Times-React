import React, { Component } from "react";
import API from "../Utils/API";

class SearchForms extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{/* <form className="search-form"> */} 
							<h2>Search</h2>
							<div className="form-group">
								<label forHtml="exampleInputEmail1"></label>
								<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Topic" onChange={this.updateSearchValue.bind(this)}/>
							</div>
							<div className="form-group">
								<label forHtml="exampleInputPassword1"></label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Start Year" onChange={this.updateStartYear.bind(this)}/>
							</div>
							<div className="form-group">
								<label forHtml="exampleInputPassword1"></label>
								<input type="text" className="form-control" id="exampleInputPassword1" placeholder="End Year" onChange={this.updateEndYear.bind(this)}/>
							</div>
							<button type="submit" className="btn btn-primary" onClick={this.searchSubmit}>Submit</button>
						{/* </form> */}
					</div>
				</div>
			</div>
		);
    }
    searchSubmit() {
        API.getArticlesNY().then(function(data){
			
			console.log(data);
		}) 
	}

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			startDate: "",
			endDate: ""
		};
	}

	updateSearchValue (data) {
		this.setState({
			title: data.target.value
		})
	}

	updateStartYear (data) {
		this.setState({
			startDate: data.target.value
		})
	}

	updateEndYear (data) {
		this.setState({
			endDate: data.target.value
		})
	}
}


export default SearchForms;