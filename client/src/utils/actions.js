const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';
const TOGGLE_CART = 'TOGGLE_CART';

export function updateFunction(data){
    return{
        type: UPDATE_PRODUCTS,
        data,
    }
}

export function updateCat(data){
    return{
        type: UPDATE_CATEGORIES,
        data,
    }
}

export function updateCurrentCat(data){
    return{
        type: UPDATE_CURRENT_CATEGORY,
        data,
    }
}
export function addMultiple(data){
    return{
        type: ADD_MULTIPLE_TO_CART,
        data,
    }
}

export function removeFromCart(data){
    return{
        type: REMOVE_FROM_CART,
        data,
    }
}

export function updateCartQuantity(data){
    return{
        type: UPDATE_CART_QUANTITY,
        data,
    }
}

export function clearCart(data){
    return{
        type: CLEAR_CART,
        data,
    }
}

export function toggleCart(data){
    return{
        type: TOGGLE_CART,
        data,
    }
}