import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import SavedList from "./SavedList";
import API from "../../utils/API";
import { Container, Jumbotron, Card } from 'reactstrap';
import axios from 'axios'
import GroceryList from "../List/ListGrocery/GroceryList";
import styled from 'styled-components';



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
        this.updateSavedRecipes();
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
    console.log("Saved Update ========" + this.state.user._id)
    axios.get('/api/recipes/' + this.state.user._id).then(res => {
      this.setState({ saved: res.data })
      console.log(this.state.saved)
    })
  }

  deleteRecipe = id => {
    axios.delete('/api/recipes/' + id)
      .then(res => this.updateSavedRecipes())
      .catch(err => console.log(err));
  };

  render() {

    const Container = styled.div`
      background: transparent;
      width: 60em;
      height: 100%;
      left: 0%;
      top: 10%;
      padding: 1em;
      margin-left: 17em;
    `
    
  

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
            handleRecipeSave={this.handleRecipeSave} />
        </Jumbotron>
        <Jumbotron>
          <h1> Saved Recipes </h1>
          <hr></hr>
          <SavedList
            saved={this.state.saved}
            deleteRecipe={this.deleteRecipe} />
        </Jumbotron>
      </Container>
    );
  }
}

export default SearchResultContainer;
