import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingContext from '../context/shopping-context';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
    priceDiscount: {
        textDecoration: 'line-through',
    }
});





const ProductCard = ({ product }) => {

    const classes = useStyles();
    const shoppingContext = useContext(ShoppingContext);
    const productsInShoppingBag = shoppingContext.productsInShoppingBag;
    const productsInFavorites = shoppingContext.productsInFavorites;



    const addToShoppingBag = () => {
        shoppingContext.addToShoppingBag(product);
    }

    const addToFavorites = () => {
        shoppingContext.addToFavorites(product);
    }

    const checkIfProductIsInShoppingBag = () => {
        return productsInShoppingBag.some((productInBag) => productInBag.uuid === product.uuid);
    }

    const checkIfAddedToFavorites = () => {
        return productsInFavorites.some((productInFav) => productInFav.uuid === product.uuid);
    }

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.cover_image_url}
                    title="Product title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {product.title}
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                            {product.discount > 0 && <Typography className={classes.priceDiscount} color="error">{product.original_retail_price.formatted_value}</Typography>}
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.retail_price.formatted_value}
                        </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                {checkIfProductIsInShoppingBag() ?
                    <Button variant="contained" disabled>
                        In the bag
                            </Button> :
                    <Button variant="contained" size="small" color="secondary" onClick={() => addToShoppingBag()}>
                        Add to bag
                    </Button>
                }

                {checkIfAddedToFavorites() ?
                    <Button disabled>
                        Added to favorites
                    </Button> :
                    <Button size="small" color="primary" onClick={addToFavorites}>
                        Add to favorites
                    </Button>
                }
            </CardActions>
        </Card>
    );
}

export default ProductCard;