
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        s => s.id===cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(s => s.id===cartItemToAdd.id?
            {...s, quantity: s.quantity + 1}
            : s);
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
};