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

export default class Firebase {
  constructor() {
    app.initializeApp(CONFIG);
    this.db = app.firestore();
  }

  add = async (email, id, fav) => {
    await this.db
      .collection("MealPlannerFavs")
      .add({ email: email, idMeal: id, isfav: fav })
      .then((ref) => {
        console.log("Added document with ID: ", ref.id);
      })
      .catch((error) => console.error("Error adding document: ", error));
  };

  getByEmail = async (email) => {
    const query = await this.db
      .collection("MealPlannerFavs")
      .where("email", "==", email)
      .get();
    const snapshot = query.docs[0];
    return snapshot.data();
  };
}
