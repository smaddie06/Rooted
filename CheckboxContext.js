// // GlobalStateContext.js
// import { createContext } from "react";

// export const CheckboxContext = createContext(false);

// const initialState = {
//   medsVisible: false,
// };

// const globalStateReducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_MEDS_VISIBILITY":
//       return { ...state, medsVisible: !state.medsVisible };
//     default:
//       return state;
//   }
// };

// export const GlobalStateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalStateReducer, initialState);

//   return (
//     <GlobalStateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

// export const useGlobalState = () => {
//   const context = useContext(GlobalStateContext);
//   if (!context) {
//     throw new Error("useGlobalState must be used within a GlobalStateProvider");
//   }
//   return context;
// };
