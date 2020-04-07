
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        s => s.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(s => s.id === cartItemToAdd.id ?
            { ...s, quantity: s.quantity + 1 }
            : s);
    } else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(i => i.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(i => i.id !== cartItemToRemove.id);
    }
    return cartItems.map(i => i.id === cartItemToRemove.id ?
        { ...i, quantity: i.quantity - 1 }
        :
        i);
};