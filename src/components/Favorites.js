import React from 'react';
import ShoppingContext from '../context/shopping-context';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationBadge from 'react-notification-badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DeleteIcon from '@material-ui/icons/Delete';
import {nanoid} from 'nanoid';


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
                                    {productsInFavorites.map((favoriteProduct) => 
                                    <MenuItem key={nanoid()}><img src={favoriteProduct.cover_image_url} alt="img" width="60"></img>
                                    <p>{favoriteProduct.title}</p>
                                    <DeleteIcon onClick={() => removeProductFromFavorites(favoriteProduct)}></DeleteIcon>
                                    </MenuItem>)}
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