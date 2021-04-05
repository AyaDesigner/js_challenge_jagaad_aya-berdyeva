import React from 'react';
import ShoppingContext from '../context/shopping-context';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationBadge from 'react-notification-badge';


const ShoppingBag = () => {
    const shoppingContext = React.useContext(ShoppingContext);
    const productsInShoppingBag = shoppingContext.productsInShoppingBag;

    const calcTotalPrice = () => {
        return productsInShoppingBag.reduce((totalPrice, product) => {
            const productPrice = product.original_retail_price.value;
            return totalPrice + productPrice;
        }, 0)
    }


    return (
        <div>
            <div>
                <NotificationBadge count={shoppingContext.productsInShoppingBag.length} />
                    Total: € {calcTotalPrice().toFixed(1)} 
                <ShoppingCartIcon></ShoppingCartIcon>
            </div>

        </div>
    );
}

export default ShoppingBag;