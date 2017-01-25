export default (state = {}, action = {}) => {
    switch(action.type) {
        case 'ADD_IMAGES':
            return {
                lastImages: [...state, action.images]
            }
        default: return state;
    }
}