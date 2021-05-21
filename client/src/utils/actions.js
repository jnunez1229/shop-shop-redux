const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';
const TOGGLE_CART = 'TOGGLE_CART';

export const updateconst = () => {
    return{
        type: UPDATE_PRODUCTS
        
    }
}

export const updateCat = () => {
    return{
        type: UPDATE_CATEGORIES
        
    }
}

export const updateCurrentCat = () => {
    return{
        type: UPDATE_CURRENT_CATEGORY
        
    }
}
export const addMultiple = () => {
    return{
        type: ADD_MULTIPLE_TO_CART
        
    }
}

export const removeFromCart = () => {
    return{
        type: REMOVE_FROM_CART
        
    }
}

export const updateCartQuantity = () => {
    return{
        type: UPDATE_CART_QUANTITY
        
    }
}

export const clearCart = () => {
    return{
        type: CLEAR_CART
        
    }
}

export const toggleCart = () => {
    return{
        type: TOGGLE_CART
    }
}