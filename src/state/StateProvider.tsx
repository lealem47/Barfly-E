
import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext(null as any);

//provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// How we use context api inside of a component
export const useStateValue = () => useContext(StateContext);