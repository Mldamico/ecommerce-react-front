import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (itemInCart) => itemInCart.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((itemInCart) =>
            itemInCart.product === existItem.product ? item : itemInCart
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {};
    default:
      return state;
  }
};
