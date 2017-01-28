export default (state = {}, action = {}) => {
    switch(action.type) {
        case 'ADD_ALBUMS': return [ ...state, ...action.albums ]
        case 'DELETE_ALBUM':
            return  [...state.albums.slice(0,state.albums.indexOf(action.album)),
                         ...state.albums.slice(state.albums.indexOf(action.album)+1)]
        case 'EDIT_ALBUM':
            return state;
        default: return state;
    }
}