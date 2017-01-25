export default (state = {}, action = {}) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            return {
                username: action.user.username,
                description: action.user.description,
                socials: action.user.socials,
                mainImage: action.user.mainImage,
                backgroundImage: action.user.backgroundImage
            }
        default: return state;
    }
}