import React from 'react';
import ShoppingBag from './ShoppingBag';
import Favorites from './Favorites';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Header = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>LOGO</Paper>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}><ShoppingBag /></Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Paper className={classes.paper}><Favorites /></Paper>
                    </Grid>

                </Grid>
            </div>


        </div>);
}

export default Header;