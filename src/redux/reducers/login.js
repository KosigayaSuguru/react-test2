export function auth(state = false, action) {
    switch (action.type) {
        case 'AUTH':
            return true;
        case 'UNAUTH':
            return false;
        default:
            return state;
    }
}
