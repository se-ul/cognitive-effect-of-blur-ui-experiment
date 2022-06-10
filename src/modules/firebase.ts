import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz7nA1rpTe5OaDToZdED47pIg9HKEbuBE",
  authDomain: "blur-ui-experiment.firebaseapp.com",
  projectId: "blur-ui-experiment",
  storageBucket: "blur-ui-experiment.appspot.com",
  messagingSenderId: "393239884528",
  appId: "1:393239884528:web:a5d4185615dbfbac4e0835",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

export async function recordResult(result: any) {
  const docRef = collection(firestoreDB, "results");
  await addDoc(docRef, {
    value: JSON.stringify(result),
  });
}
