import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Jumbotron from '../src/components/Jumbotron';
import SearchForm from '../src/components/SearchForm';
import SearchForms from '../src/components/SearchForms';
import SavedArticles from '../src/components/SavedArticles';
import SavedArticle from '../src/components/SavedArticle';
import Results from '../src/components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* Navbar */}
        <Navbar />

        {/* Jumbotron */}
        <Jumbotron />

        {/* Search Form */}
       <SearchForms  />
        {/* End of Search Form */}
        <br />
        <br />
        {/* Results Card */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  Results
                </div>
                  <Results />
              </div>
            </div>
          </div>
        </div>     
        {/* End of Results Card  */}
        <br />
        <br />
        {/* Saved Card */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  Saved Articles
                </div>
                <SavedArticle />
              </div>
            </div>
          </div>
         </div> 
         {/* End of Saved Card */}
         <br />
         <br />
      </div>

    );
  }
}

export default App;
