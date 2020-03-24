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
                        <Typography variant="h4" line-height="1.6">Mission Statement</Typography><hr></hr>
                        <p>
                        Here at Hackornaut, our mission is to help inform and secure our user's privacy.  This website is designed with that goal in mind.
                        </p><br></br>
                        <Typography variant="h4">Key Features</Typography><hr></hr>
                        <p>
                        Users can view an index of all breached sites.  Users can search their email to view all breaches associated with that particular email account.  Users can create an account to save their searches.                 
                        </p><br></br>
                        <Typography variant="h4">5 Ways to Keep Your Emails Secure</Typography><hr></hr>
                        <p>
                          <Typography variant="h6">1.	Use two-factor authentication</Typography>
                          <Box letterSpacing={1.5} m={3}>
                          The basic principle of two-factor authentication is simple: combine something you know with something you have. One example is a debit card, which requires you to have both your physical card and your PIN to verify your identity. By enabling two-factor authentication (or two-step verification), you aren’t putting all of your faith in a password. 
                          </Box>
                        </p>
                        <Typography variant="h4">Creators</Typography><hr></hr>
                    </Grid>
                  </Grid>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <Typography><strong>Alicia Chao: </strong><a href="https://github.com/chaochaocodes">@chaochaocodes</a></Typography>
                    </Grid>
                  </Grid>
                </Paper>
            </div>
        </Fragment>
    )
}

export default Privacy