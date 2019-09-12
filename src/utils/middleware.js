let loggedActions = [];
const actionLogger = (store) => (next) => (action) => {
    if (action && action.type.startsWith('@@redux-form')) {
        loggedActions.push({visited: false, ...action});
    }
    return next(action)
}

export const getFormActions = () => {
    loggedActions.forEach((action) => action.visited = true);
    return loggedActions;
}

export const removeAllActions = () => {
    loggedActions.splice(0,loggedActions.length);
}

export const removeAllVisitedActions = () => {
    loggedActions = [
        ...loggedActions.filter(({visited}) => !visited)
    ]
}

export default actionLogger;
