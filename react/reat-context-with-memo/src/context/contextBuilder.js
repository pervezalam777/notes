import React, { useContext, useReducer } from "react";


export default (reducer, actions, initialState, stateName = "state") => {
  const Context = React.createContext();

  let prevDispatch = null;
  let withDispatchActions = null

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    if(prevDispatch !== dispatch){
      prevDispatch = dispatch
      withDispatchActions = {};
      for (let key in actions) {
        withDispatchActions[key] = actions[key](dispatch);
      }
    }

    return (
      <Context.Provider value={{ [stateName]: state, ...withDispatchActions }}>
        {children}
      </Context.Provider>
    );
  };

  const withContext = Component => {
    return props => {
      const data = useContext(Context);
      return <Component {...props} {...data} />;
    };
  };

  return { Context, Provider, withContext };
};
