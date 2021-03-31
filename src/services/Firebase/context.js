import { createContext, useContext } from "react";
import Firebase from "./firebase";

// create a Firebase context to make state available anywhere in the App.
const FirebaseContext = createContext(new Firebase());

export const useFirebase = () => useContext(FirebaseContext);
export default FirebaseContext;
