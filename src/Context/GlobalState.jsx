import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
// Initial State
const initialStete = {
    transactions: []
}

// Creating the context
export const GlobalContext = createContext(initialStete);

// Creating the Provider

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialStete);

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
         deleteTransaction, addTransaction }}
        >
        {children}
    </GlobalContext.Provider>)
}
