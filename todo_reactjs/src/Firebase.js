import firebase from 'firebase';
import 'firebase/firestore';

// chỗ này khai báo thông tin kết nối Firebase 
const config = {
  
  // apiKey: 'AIzaSyA4KhjrlLQCGvE-_WowIWK89fBwaKBuafs',
  // authDomain: 'AUTHDOMAIN',
  // databaseURL: 'https://quoteapp-e7710.firebaseio.com',
  projectId: 'quoteapp-e7710',
  // storageBucket: 'gs://quoteapp-e7710.appspot.com',
  // messagingSenderId: 'MESSAGINGSENDERID',
  // appId: 'uhouse-2e259'
};

export default class Firebase1 {
  static db;

  static init() {
    firebase.initializeApp(config);
    Firebase1.db = firebase.firestore();
  }
}