import React, {Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    },
  paper: {
    maxWidth: 800,
    overflow: 'hidden',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4), 
    // backgroundColor: '#000000',
    // color: '#FFFFFF',
    opacity: 0.7,
  },
  image: {
    width: 75,
    height: 75,
  },
  img: {
    margin: 'auto',
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Privacy = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography variant="h5" line-height="1.6">About Client-RM</Typography><hr></hr>
                        <p>
                        Here at Client-RM, our mission is to inform buyer's about the home purchase process.  A home purchase is an individuals' biggest purchase, yet is the most confusing process to go through.  Our goal is to help future home owner's manage their relationships and transactions during the process.  This website is designed with that goal in mind.
                        </p><br></br>
                        <Typography variant="h5">Key Features</Typography><hr></hr>
                        <p>
                        <li>Users can view an index of all listings.</li>
                        <li>Users can search listings by city </li>
                        <li>Users can filter by amenities    </li>
                        </p><br></br>
                        <Typography variant="h5">Tips & Tricks</Typography><hr></hr>
                        <p>
                        <li>Users can view an index of all listings.</li>
                        <li>Users can search listings by city </li>
                        <li>Users can filter by amenities    </li>
                        </p><br></br>
                        <Typography variant="h5">Q & A</Typography><hr></hr>
                        <p>
                          <Typography variant="h6">1.	Should I Invest in Homeownership?</Typography>
                          <Box letterSpacing={1} m={3}>
                          Like any financial commitment, it has pros and cons. Homeownership has always been part of the American Dream. Because of that, many people accept owning a home as the right, even obligatory thing to do without considering the benefits and the risks. If you are contemplating buying a home, you should know and review the pros and cons of the investment you are about to make—as you would any investment decision—before signing on the dotted line.
                          <li>If you are considering homeownership, be aware of and review the advantages along with any potential risks you may face before you close the deal. </li>
                          <li>Benefits of investing in a home include appreciation, home equity, tax deductions, and deductible expenses.</li>
                          <li>Risks and caveats of investing in a home can include high upfront costs, depreciation, and illiquidity.</li>
                          </Box>
                        </p>
                        
                        <Typography variant="h5">About the Creator</Typography><hr></hr>
                    </Grid>
                  </Grid>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <Typography> Alicia Chao is a full-stack software engineer based in Seattle, WA. Her inspiration for this web app comes from her own experience as a first-time home owner and licensed Realtor.  She developed this app as a tool to help ease the pain of new home owner's entering the process and fulfilling the American Dream. 
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Privacy