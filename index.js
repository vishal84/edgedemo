const admin = require("firebase-admin");
const serviceAccount = require("./edgedemo-925ea.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://edgedemo-925ea.firebaseio.com/"
});

// Get a database reference to our blog
const db = admin.database();
const ref = db.ref("edgedemo");

const productRef = ref.child("products");







