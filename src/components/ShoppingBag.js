import React from 'react';
import ShoppingContext from '../context/shopping-context';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationBadge from 'react-notification-badge';




const ShoppingBag = () => {
    const shoppingContext = React.useContext(ShoppingContext);

    return (
        <div>
            <div>
            <NotificationBadge count={shoppingContext.productsCounter}/>
            Total: € {shoppingContext.totalPrice} 
            <ShoppingCartIcon></ShoppingCartIcon>
            </div>
            
        </div>
    );
}

export default ShoppingBag;