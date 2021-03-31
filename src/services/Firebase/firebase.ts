import app from "firebase/app";
import "firebase/firestore";
import CollectionReference = app.firestore.CollectionReference;
import Firestore = app.firestore.Firestore;
import DocumentData = app.firestore.DocumentData;

const CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const FAVS = "favs";

/**
 * Firebase initializes the Application and provides method to interact with
 * Firebase services as auth and firestore.
 */
export default class Firebase {
  #db: Firestore;
  #collection: CollectionReference;

  constructor() {
    app.initializeApp(CONFIG);
    this.#db = app.firestore();
    this.#collection = this.#db.collection("mealPlannerUsers");
  }

  /**
   * Get infos for user 'email'.
   */
  getByEmail = async (email: string) => {
    const infos = await this.#collection
      .where("email", "==", email)
      .limit(1)
      .get();

    const favs = await this.getFavsByEmail(email);

    return { infos, favs };
  };

  /**
   * Get user's favourite recipes
   * */
  getFavsByEmail = async (email: string) => {
    let favs = [] as DocumentData[];
    const query = await this.#collection
      .doc(email)
      .collection(FAVS)
      .where("isFav", "==", true)
      .limit(10)
      .get();

    query.forEach((doc) => favs.push(doc.data()));

    return favs;
  };

  isFav = async (email: string, idMeal: string) => {
    const query = await this.#collection
      .doc(email)
      .collection(FAVS)
      .doc(idMeal)
      .get();

    const obj = query.data();
    return obj?.isFav;
  };

  /**
   * Create or update favourite status for an authenticated user.
   */
  addToFavs = async (
    email: string,
    idMeal: string,
    strMeal: string,
    strMealThumb: string,
    isFav: boolean
  ) => {
    this.#collection
      .doc(email)
      .collection(FAVS)
      .doc(idMeal)
      .set({
        email,
        idMeal,
        strMeal,
        strMealThumb,
        isFav,
      })
      .catch((err) => console.error("Error adding favs to database", err));
  };
}
