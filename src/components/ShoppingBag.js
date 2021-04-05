import React from 'react';
import ShoppingContext from '../context/shopping-context';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationBadge from 'react-notification-badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DeleteIcon from '@material-ui/icons/Delete';


const ShoppingBag = () => {
    const shoppingContext = React.useContext(ShoppingContext);
    const productsInShoppingBag = shoppingContext.productsInShoppingBag;
    const removeFromShoppingBag = shoppingContext.removeFromShoppingBag;

    const calcTotalPrice = () => {
        return productsInShoppingBag.reduce((totalPrice, product) => {
            const productPrice = product.original_retail_price.value;
            return totalPrice + productPrice;
        }, 0)
    }


    return (
        <div>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <NotificationBadge count={shoppingContext.productsInShoppingBag.length} />
                        Total: € {calcTotalPrice().toFixed(1)}
                            {productsInShoppingBag.length > 0 ?
                                        <React.Fragment>
                                            <ShoppingCartIcon {...bindTrigger(popupState)} />
                                            <Menu {...bindMenu(popupState)}>
                                                {productsInShoppingBag.map((product) =>
                                                    <MenuItem><img src={product.cover_image_url} alt="img" width="60"></img>
                                                        <p>{product.title}</p>
                                                        <DeleteIcon onClick={() => removeFromShoppingBag(product)}></DeleteIcon>
                                                    </MenuItem>)}
                                            </Menu>
                                        </React.Fragment>
                                        :
                                    <ShoppingCartIcon />
                        }
                    </React.Fragment>
                )}
            </PopupState>



        </div>
    );
}

export default ShoppingBag;