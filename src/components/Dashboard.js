import React from 'react';
import Header from './Header';
import ProductsList from './ProductsList';
import Footer from './Footer';
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

const Dashboard = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Header/></Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                    <ProductsList/>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Footer/></Paper>
                </Grid>             
            </Grid>          
        </div>
    );
}


export default Dashboard;