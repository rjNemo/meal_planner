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
    const query = await this.collection
      .where("email", "==", email)
      .limit(1)
      .get();

    return query.docs[0].data();
  };

  // get user's favourite recipes
  getFavsByEmail = async (email) => {
    const query = await this.collection.where("email", "==", email).get();
    return query.docs[0].collection("favs").get();

    //   .limit(1)
    //   .get();

    // return query.docs[0].data();
    // const user = await this.getByEmail(email);
    // const query = user.collection("favs").get();

    // const favs = [];
    // query.docs.forEach((doc) => favs.push(doc.data()));
    // console.log(favs);
    // return favs;
  };

  /**
   * Create or update favourite status for an authenticated user.
   */
  addToFavs = async (email, idMeal, isFav) => {
    this.collection
      .doc(email)
      .collection("favs")
      .doc(idMeal)
      .set({
        email,
        idMeal,
        isFav,
        timestamp: this.db.FieldValue.serverTimestamp(),
      })
      // .then(() => console.log("Fav object created."))
      .catch((err) => console.error("Error adding favs to database", err));
  };
}
