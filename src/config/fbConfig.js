import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7WaTzzCNO61GhNE-YGoDcDpaK1-zsjGk',
  authDomain: 'eshop-3de5f.firebaseapp.com',
  projectId: 'eshop-3de5f',
  storageBucket: 'eshop-3de5f.appspot.com',
  messagingSenderId: '259614706999',
  appId: '1:259614706999:web:0194c75222bd333c919eb2',
};

export const fbDatabase = firebase.initializeApp(firebaseConfig);

export const fbStorage = firebase.storage();
