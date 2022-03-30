const initialState = {
    budget: []
}
const budgetReducer = (state = initialState, action) =>{
    const newState = { ...state}
    switch (action.type){
        case 'SET_BUDGET':
            console.log("In Set Budget");
            return newState;
        case 'REMAINING':
            console.log("In Set Budget");
            return newState;
        case 'SPENT':
            console.log("In Set Budget");
            return newState;
        default:
            return newState;
                
    }

}

export default budgetReducer;