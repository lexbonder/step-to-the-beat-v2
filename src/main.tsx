import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { router } from './routes';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFbn7YWVF5c0lsubA5SIDIWrcqfEMLAa0",
  authDomain: "step-to-the-beat-v2.firebaseapp.com",
  projectId: "step-to-the-beat-v2",
  storageBucket: "step-to-the-beat-v2.appspot.com",
  messagingSenderId: "270363223922",
  appId: "1:270363223922:web:20e0ada60baf697efe9feb",
  measurementId: "G-FPLRBRNJH3"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
