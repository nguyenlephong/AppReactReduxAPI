import * as Types from './../constants/ActionType';

var initialState = [];

const products = (state = initialState, action) => {
    var { product, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return [...action.products];
        case Types.SEARCH_PRODUCTS:
            return [...action.products];
        case Types.FILTER_PRODUCT:
            return [...action.products];
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.productId);
            state[index] = product;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.productId === id) {
            result = index;
        }
    });
    return result;
}

export default products;