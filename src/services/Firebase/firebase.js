import app from "firebase/app";
import "firebase/firestore";
import config from "./config.json";

const CONFIG = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DB_URL,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MSG_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID,
  // apiKey: process.env.API_KEY ,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DB_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MSG_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
};

const FAVS = "favs";

/**
 * Firebase initializes the Application and provides method to interact with
 * Firebase services as auth and firestore.
 */
export default class Firebase {
  constructor() {
    app.initializeApp(CONFIG);
    this.db = app.firestore();
    this.collection = this.db.collection("mealPlannerUsers");
  }

  /**
   * Get infos for user 'email'.
   */
  getByEmail = async (email) => {
    const infos = await this.collection
      .where("email", "==", email)
      .limit(1)
      .get();

    const favs = await this.getFavsByEmail(email);

    return { infos, favs };
  };

  /**
   * Get user's favourite recipes
   * */
  getFavsByEmail = async (email) => {
    let favs = [];
    const query = await this.collection
      .doc(email)
      .collection(FAVS)
      .where("isFav", "==", true)
      // .orderBy("timestamp", "desc")
      .limit(10)
      .get();

    query.forEach((doc) => favs.push(doc.data()));

    return favs;
  };

  isFav = async (email, idMeal) => {
    const query = await this.collection
      .doc(email)
      .collection(FAVS)
      .doc(idMeal)
      .get();

    const obj = query.data();
    return obj && !!obj.isFav;
    // .where("isFav", "==", true);
    // return !!query;
  };

  /**
   * Create or update favourite status for an authenticated user.
   */
  addToFavs = async (email, idMeal, strMeal, strMealThumb, isFav) => {
    this.collection
      .doc(email)
      .collection(FAVS)
      .doc(idMeal)
      .set({
        email,
        idMeal,
        strMeal,
        strMealThumb,
        isFav,
        // timestamp: app.FieldValue.serverTimestamp(),
      })
      // .then(() => console.log("Fav object created.", isFav))
      .catch((err) => console.error("Error adding favs to database", err));
  };
}
