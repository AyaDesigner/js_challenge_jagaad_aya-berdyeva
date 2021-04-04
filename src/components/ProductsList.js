import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import {nanoid} from 'nanoid';





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: "flex"
      },
      paper: {
        height: 200,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
      }
}));





const ProductsList = () => {

    const classes = useStyles();
    const [productsList, setProductsList] = useState([]);
    const [page, setPage] = React.useState(1);



    useEffect(() => {
        axios.get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0')
            .then((response) => {
                console.log(response.data);
                setProductsList(response.data)
            })
    }, []);

    const changePage = (event, value) => {
        console.log(value);
        let offset = (value - 1) * 6;
        setPage(value);

        axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=${offset}`)
            .then((response) => {
                setProductsList(response.data);
            })
    }


    return (
        <div className={classes.container}>
            <Grid 
            container spacing={4} 
            justify="flex-start" 
            alignItems="center"
            >
                {productsList.map((product) => <Grid key={nanoid()} item xs={12} sm={6} md={6} lg={4}><ProductCard product={product} /></Grid>)}
                <Grid container spacing={4}
                justify="center" 
                alignItems="center">
                    <Typography>Page: {page}</Typography>
                    <Pagination count={10} page={page} onChange={changePage}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductsList;