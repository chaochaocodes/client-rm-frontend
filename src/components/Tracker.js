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
}));

const Privacy = () => {
    const classes = useStyles();
    return(
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography variant="h4">5 Steps to Home Buying</Typography><hr></hr>
                        <p>
                          <Typography variant="h6">1.	Get Pre-Approved</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          It’s important to know how much home you can afford, what type of down payment to budget for, monthly mortgage payment as well as what type of loan program you’ll use to finance the new property.
                          <p>A personal consultation with a trusted mortgage professional should address all your initial loan approval questions, as well as uncover any potential challenges that can complicate the entire transaction. Certain mortgage loans have residence type, HOA, appraisal or insurance restrictions that your agent needs to be aware of before showing you listings.</p>
                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">2.	Assemble your Team</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          The home buying process has multiple steps, participating parties and potential challenges that can be overcome with the right team on your side. Your agent, appraiser, title company, home inspector, insurance agent and lender all have important roles to play. Buying a new home is literally a team sport since there are so many tasks, important timelines, documents and responsibilities that need attention.

Besides working with a professional team that you trust, it’s also important that the individual players have the ability to effectively communicate and execute on important decisions together.                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">3.	Purchase Offer</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          Assuming that you’ve already received a mortgage pre-approval and have a good understanding of the type of property you are qualified to purchase, your agent will submit your purchase offer to a listing agent or seller.

Once you receive an accepted offer, the due-diligence period starts a series of timelines for final mortgage approval, appraisal, inspections and other requirements which would be stated in the terms of the contract.                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">4.	Under Contract Process</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          It comes in from all angles at this point – lenders, processors, insurance agents, sellers, real estate agents and you.                          </Box>
                        </p>
                        <p>
                          <Typography variant="h6">5.	Closing and Keys!</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          A successful closing requires all of the team players to come together at the same time, with the same agenda, on the same date…. with numbers and figures that match. Once a transaction has closed successfully, you are the proud owner of your new home.                          </Box>
                        </p><br></br>
                        <Typography variant="h4">Tips</Typography><hr></hr>
                    </Grid>
                  </Grid>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Privacy