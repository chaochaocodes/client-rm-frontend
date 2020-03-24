import React, { Component } from 'react';
import IndexList from '../components/IndexList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const DB_URL = "http://localhost:3000"

const options = [
    10, 20, 30, 40, 50
  ]

class IndexContainer extends Component {
    
    state = {
        all_listings: [],
        select_amount: 10,
        start_index: 0
    }
    
    componentDidMount(){
        console.log("Index component mounted!")
        fetch(DB_URL + "/listings/twenty")
        .then(res => res.json())
        // .then(res => console.log(res))
        .then((res) => {
          this.setState({
            all_listings: res
          })
        }
    )}

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
        return this.state.all_listings.slice(this.state.start_index, this.state.start_index+this.state.select_amount);
      }

      handleChange = (e) => {
        console.log("Selected num", e.target.value)
        this.setState({
            select_amount: parseInt(e.target.value)
        })
      }

    render() {
        return ( 
            <div> 
              <h5 padding-left="20px">Browse Your Curated Collection of Listings</h5>
              <Grid container direction="column" justify="center" alignItems="center">
                <select justify="center" value={null} className="form-control" onChange={this.handleChange}>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                    <option value={options[3]}>{options[3]}</option>
                    <option value={options[4]}>{options[4]}</option>
                </select>
                <IndexList listings={this.getSelectListings()}/>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center">
                <Button variant="contained" color="primary" onClick={() => this.showLessListings()}> >> </Button> &nbsp;
                 {this.state.start_index} - {parseInt(this.state.start_index+this.state.select_amount)} &nbsp; 
                <Button variant="contained" color="primary" onClick={() => this.showMoreListings()}> >> </Button>
              </Grid>
            </div>
            
        );
    }

}

export default IndexContainer;