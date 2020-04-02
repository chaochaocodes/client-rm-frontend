import React, { Component } from 'react';
import SearchSelect from '../components/SearchSelect'
import IndexList from '../components/IndexList'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { api } from "../services/api";

const options = [
  10, 20, 30, 40, 50
]

class SearchContainer extends Component {

    state = {
        results: [],
        select_amount: 10,
        start_index: 0
      }

    handleSubmit = (e) => {
      console.log("fires")
      e.preventDefault();
      api.listings.searchListings({search: {city: e.target.city.value, state: e.target.state.value}})
      .then(res => res.json())
      .then(res => {this.setState({results: res})})
    };
      
    showMoreListings = () => {
      let add = parseInt(this.state.select_amount)
      let start = parseInt(this.state.start_index)
      const new_start = add + start
      this.setState({
        start_index: new_start
      })
      console.log(this.state)
  }

    showLessListings = () => {
        let minus = parseInt(this.state.select_amount)
        let start = parseInt(this.state.start_index)
        const new_start = start - minus
        if(new_start >= 0) {
            this.setState({
            start_index: new_start
            })
        }
        console.log(this.state)
    }

    getSelectListings = () => {
      console.log(this.state.results)
      return this.state.results.slice(this.state.start_index, this.state.start_index+this.state.select_amount);
    }

    handleChange = (e) => {
      console.log("Selected num", e.target.value)
      this.setState({ select_amount: parseInt(e.target.value)})
    }

    showResults = () => {
      return ( 
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
              <div> 
              <h3>Search Results:</h3>
              <select justify="right" value={null} className="form-control" onChange={this.handleChange}>
                  <option value={options[0]}>{options[0]}</option>
                  <option value={options[1]}>{options[1]}</option>
                  <option value={options[2]}>{options[2]}</option>
                  <option value={options[3]}>{options[3]}</option>
                  <option value={options[4]}>{options[4]}</option>
              </select>
              </div> 
              <IndexList listings={this.getSelectListings()} handleSave={this.props.handleSave}/>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
              <Button variant="contained" color="primary" onClick={() => this.showLessListings()}> {`<<`} </Button> &nbsp;
               {this.state.start_index} - {parseInt(this.state.start_index+this.state.select_amount)} &nbsp; 
              <Button variant="contained" color="primary" onClick={() => this.showMoreListings()}> >> </Button>
            </Grid>
        </div>
      );
    }

render() {
  return ( 
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <SearchSelect handleSubmit={this.handleSubmit}/>
        {this.state.results.length === 0 ? null : this.showResults()}
      </Grid>
    </div>
  );
}}

export default SearchContainer;