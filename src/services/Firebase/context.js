import { createContext, useContext } from "react";

// create a Firebase context to make state available anywhere in the App.
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);
export default FirebaseContext;
