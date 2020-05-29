import React from 'react';
import Contacts from './ContactForm';
import CheckList from './CheckList';
import TodoApp from './TodoApp';
import Expansion from './Expansion';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  }));

var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

function Dashboard () {
    const classes = useStyles();

    return(
        <>
        <Expansion/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Contact Information
          </Typography>
        <Contacts/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Check List
          </Typography>
        <CheckList/>
        <TodoApp initItems={todoItems}/>
        </Paper>
        </>
    )

}

export default Dashboard;