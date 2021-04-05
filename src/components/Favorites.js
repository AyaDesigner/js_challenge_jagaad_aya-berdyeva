import React from 'react';
import ShoppingContext from '../context/shopping-context';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationBadge from 'react-notification-badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DeleteIcon from '@material-ui/icons/Delete';


const Favorites = () => {
    const shoppingContext = React.useContext(ShoppingContext);
    const productsInFavorites = shoppingContext.productsInFavorites;
    const removeProductFromFavorites = shoppingContext.removeProductFromFavorites;



    return (
        <div>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <NotificationBadge count={shoppingContext.productsInFavorites.length} />

                        {productsInFavorites.length > 0 ?
                            <React.Fragment>
                                <FavoriteIcon {...bindTrigger(popupState)} />
                                <Menu {...bindMenu(popupState)}>
                                    {productsInFavorites.map((favoriteProduct) => <MenuItem>{favoriteProduct.title} <DeleteIcon onClick={() => removeProductFromFavorites(favoriteProduct)}></DeleteIcon></MenuItem>)}
                                </Menu>
                            </React.Fragment>
                            :
                            <FavoriteIcon />

                        }



                    </React.Fragment>
                )}
            </PopupState>
        </div>);
}

export default Favorites;