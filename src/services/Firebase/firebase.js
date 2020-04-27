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

// Firebase initializes the Application and provides method to interact with
// Firebase services as auth and firestore.
export default class Firebase {
  constructor() {
    app.initializeApp(CONFIG);
    this.db = app.firestore();
  }
  // this should put email, idMeal, strMeal and isFav
  add = async (email, id, fav) => {
    await this.db
      .collection("mealPlannerUsers")
      .add({ email: email, idMeal: id, isfav: fav })
      .then((ref) => {
        console.log("Added document with ID: ", ref.id);
      })
      .catch((error) => console.error("Error adding document: ", error));
  };

  // get infos for user 'email'
  getByEmail = async (email) => {
    const query = await this.db
      .collection("mealPlannerUsers")
      .where("email", "==", email)
      .limit(1)
      .get();

    return query.docs[0].data();
  };

  getFavsByEmail = async (email) => {
    const query = await this.db
      .collection("mealPlannerUsers")
      .where("email", "==", email)
      .get();
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
}
