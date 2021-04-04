import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Footer = () => {

    const classes = useStyles();

    return ( 
    <div>
        <div className={classes.root}>
                <Grid item xs={12}>
                   <Paper className={classes.paper}>Footer</Paper>
                </Grid>
            </div>
    </div> );
}
 
export default Footer;