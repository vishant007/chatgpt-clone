import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBGJ0xJ0fzc-jt6oOBDESHPG82jWvQqKoI',
	authDomain: 'chatgpt-clone-8bccb.firebaseapp.com',
	projectId: 'chatgpt-clone-8bccb',
	storageBucket: 'chatgpt-clone-8bccb.appspot.com',
	messagingSenderId: '110792392925',
	appId: '1:110792392925:web:2a404b0fd28eccc362db34',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//  get the database from firestore
const db = getFirestore(app);

export { db };
