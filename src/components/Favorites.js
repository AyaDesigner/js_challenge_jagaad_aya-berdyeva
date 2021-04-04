import React from 'react';
import ShoppingContext from '../context/shopping-context';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationBadge from 'react-notification-badge';



const Favorites = () => {
    const shoppingContext = React.useContext(ShoppingContext);

    return ( 
    <div>
       <NotificationBadge count={shoppingContext.favorites}/>
       <FavoriteIcon></FavoriteIcon>
    </div> );
}
 
export default Favorites;