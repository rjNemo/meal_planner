import app from "firebase/app";
import "firebase/firestore";
import config from "./config.json";

const CONFIG = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
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
      // .orderBy("timestamp", "desc")
      .limit(10)
      .get();

    query.forEach((doc) => favs.push(doc.data()));

    return favs;
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
      // .then(() => console.log("Fav object created."))
      .catch((err) => console.error("Error adding favs to database", err));
  };
}
