// client/src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfLWMc2dc9dvheLQf-rDAUwE4pQo7S3fM",
    authDomain: "atraine-tech.firebaseapp.com",
    projectId: "atraine-tech",
    storageBucket: "atraine-tech.appspot.com",
    messagingSenderId: "939557458256",
    appId: "1:939557458256:web:31fe86d3f16c2be7df5c55",
    measurementId: "G-055DWLZQCR"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
