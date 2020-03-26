import React, { Component } from 'react';
import SearchSelect from '../components/SearchSelect'
import IndexList from '../components/IndexList'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const DB_URL = "http://localhost:3000/"

class SearchContainer extends Component {

    state = {
        results: null,
        select_amount: 10,
        start_index: 0
      }

    search = (city) => {
        fetch(DB_URL + "listings/search", {
          method: 'POST',
          headers: {'Content-Type':'application/json',
                    Accept: 'application/json'},
          body: JSON.stringify({"listing": city})
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            results: data
          })
        })
      }

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
    console.log("Get Selected Listings", this.state.results.listings.slice(this.state.start_index, this.state.start_index+this.state.select_amount))
    return this.state.results.listings.slice(this.state.start_index, this.state.start_index+this.state.select_amount);
  }

      showResults = () => {
        return <div>
          <Grid container direction="column" justify="center" alignItems="center">
                <IndexList listings={this.getSelectListings()}/>
                </Grid>
                <button onClick={() => this.showLessBreaches()}> ←</button>
                 {this.state.start_index}-{parseInt(this.state.start_index+this.state.select_amount)}   
                <button onClick={() => this.showMoreBreaches()}> →</button>
        </div>
      }

      render(){
        console.log(this.state.results)
          return(
            <div>
                <SearchSelect  search={this.search}/>
                {this.state.results === null ? null : this.showResults()}
            </div>
          )
      }
}

export default SearchContainer