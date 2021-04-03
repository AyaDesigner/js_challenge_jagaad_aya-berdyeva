import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));



const ProductsList = () => {

    const classes = useStyles();
    const [productsList, setProductsList] = useState([]);
    const [page, setPage] = React.useState(1);



    useEffect(() => {
        axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0')
            .then((response) => {
                console.log(response.data["aria-label"]);
                setProductsList(response.data)
            })
    }, []);

    const changePage = (event, value) => {
        console.log(value);
        let offset = (value - 1) * 6;
        setPage(value);

        axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=${offset}`)
            .then((response) => {
                setProductsList(response.data)
            })
    }


    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {productsList.map((product) => <Grid item xs={4}><ProductCard product={product} /></Grid>)}
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={10} page={page} onChange={changePage}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductsList;