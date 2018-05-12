import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import SavedList from "./SavedList";
import API from "../../utils/API";
import { Container, Jumbotron } from 'reactstrap';
import axios from 'axios'


class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    saved: [],
    user: null
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchRecipes("chicken");
    axios.get('/auth/user').then(response => {
      console.log(response.data.user)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        console.log(response.data.user.local.username)
        this.setState({
          user: response.data.user
        })
        console.log(this.state)
      }
    })
  }

  searchRecipes = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.hits }))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err));
    console.log(this.state.results)
    console.log(this.state.user)
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRecipes(this.state.search);
  };

  handleRecipeSave = (url, title) => {
    const recipeData = {
      title: title,
      ingredients: url,
      user: this.state.user
    }
    axios.post("/api/recipes", recipeData)
    this.updateSavedRecipes();
  }

  updateSavedRecipes = () => {
    axios.get('./api/user').then(res => {
      this.setState({saved: res.data.saved})
    })
  }

  render() {

    return (
      <Container>
        <Jumbotron>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ResultList 
          results={this.state.results}
          handleRecipeSave={this.handleRecipeSave}/>
          <SavedList
          saved={this.state.saved}/>
        </Jumbotron>
      </Container>
    );
  }
}

export default SearchResultContainer;
