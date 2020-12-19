import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB5Z9LqN4aMNeLlUHSJxBjoFN24q7xPlMc',
    authDomain: 'army-c52f3.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'army-c52f3',
    storageBucket: 'army-c52f3.appspot.com',
    messagingSenderId: '86811921842',
    appId: '1:86811921842:ios:b894210e88b188296c28ab',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };