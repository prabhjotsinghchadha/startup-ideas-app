import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

import { AppConfig } from './app-config';

const firebaseConfigs = {
  apiKey: 'AIzaSyB4izBDpyEZK_saMx0RbmKoxgvf5GIqv1A',
  authDomain: 'startupideas-b49f8.firebaseapp.com',
  projectId: 'startupideas-b49f8',
  storageBucket: 'startupideas-b49f8.firebasestorage.app',
  messagingSenderId: '658831503256',
  appId: '1:658831503256:web:220fd5e39d522996d6c5ed',
  measurementId: 'G-TSK0KB267J'
} as const;

const firebaseApp = initializeApp(firebaseConfigs);

export const db = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

if (AppConfig.isEmulatorMode) {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectFunctionsEmulator(functions, 'localhost', 5001);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectStorageEmulator(storage, 'localhost', 9199);
}
export default firebaseApp;
