


export const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAPITAL':
            return {
                ...state,
                capitalData: [...state.capitalData, action.payload]
            }
        case 'REMOVE_CAPITAL':
            return {
                ...state,
                capitalData: state.capitalData.filter(capital => capital.capital_ID !== action.payload)
            }
        case 'EDIT_CAPITAL':
            return {
                ...state,
                capitalData: state.capitalData.map(capital => capital.capital_ID === action.payload.capital_ID ? action.payload : capital)
            }
        case 'FETCH_CAPITAL':
            return {
                ...state,
                capitalData: action.payload
            }
        default:
            return state
    }
}


           
