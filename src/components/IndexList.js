import React from 'react'
import IndexCard from './IndexCard'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing(2)
    },
}));

const IndexList = props => {
  const classes = useStyles();

  function renderResults(){
    console.log(`---index list ${props.listings}`)
    return props.listings.map(result => {
      return(
        <Grid key={result.id} item>
            <IndexCard key={result.id} result={result} handleSave={props.handleSave}/>
        </Grid>
      )
    })}

    return(
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                {renderResults()}
            </Grid>
          </Grid>
        </Grid>
    )
}

export default IndexList