export default (state = {}, action = {}) => {
    switch(action.type) {
        case 'ADD_IMAGES':
            return  [...state, ...action.images];
        default: return state;
    }
}