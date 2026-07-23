import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu8AmOw3CdCp2huh2vtsfvgqmK3AQUYHM",
  authDomain: "periodico-utopia.firebaseapp.com",
  projectId: "periodico-utopia",
  storageBucket: "periodico-utopia.firebasestorage.app",
  messagingSenderId: "636872397282",
  appId: "1:636872397282:web:7e5a40e0bac022af7429bb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu8AmOw3CdCp2huh2vtsfvgqmK3AQUYHM",
  authDomain: "periodico-utopia.firebaseapp.com",
  projectId: "periodico-utopia",
  storageBucket: "periodico-utopia.firebasestorage.app",
  messagingSenderId: "636872397282",
  appId: "1:636872397282:web:7e5a40e0bac022af7429bb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };