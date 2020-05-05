import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDPXHs6JFcO8QIpbtm40svQi4OpvuwE4-0",
  authDomain: "shirtdesign.firebaseapp.com",
  databaseURL: "https://shirtdesign.firebaseio.com",
  projectId: "shirtdesign",
  storageBucket: "shirtdesign.appspot.com",
  messagingSenderId: "668615918587",
  appId: "1:668615918587:web:453f9f0cb36a08e146415e",
  measurementId: "G-BSLGTKQ1QK",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
