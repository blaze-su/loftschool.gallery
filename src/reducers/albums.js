export default (state = {}, action = {}) => {
    switch(action.type) {
        case 'ADD_ALBUM':
            return {
                albums: [...state, action.album]
            }
        case 'DELETE_ALBUM':
            return {
                albums: [...state.albums.slice(0,state.albums.indexOf(action.album)),
                         ...state.albums.slice(state.albums.indexOf(action.album)+1)]
            }
        case 'EDIT_ALBUM':
            return state;
        default: return state;
    }
}