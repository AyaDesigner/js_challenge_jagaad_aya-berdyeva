import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
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


const ProductsList = () => {

    const classes = useStyles();


    const [productsList, setProductsList] = useState([]);


    useEffect(() => {
        axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0')

            .then((response) => {
                console.log(response.data);
                setProductsList(response.data)
            })
    }, [])


    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {productsList.map((product) => <Grid item xs={4}><ProductCard /></Grid>)}
            </Grid>

        </div>
    );
}

export default ProductsList;