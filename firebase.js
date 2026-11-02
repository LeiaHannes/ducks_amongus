// Shared setup for index.html (players) and host.html (laptop).
// Paste your own values from Firebase: Project settings > Your apps > SDK setup and configuration.
// Make sure databaseURL is included (it's shown at the top of the Realtime Database page).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Re-export the database helpers (ref, onValue, set, update, push, remove, ...) so pages import from one place.
export * from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8yfkfWKuAtZrsWYRQeOMFg60sn97ARkk",
  authDomain: "ducks-amongus.firebaseapp.com",
  databaseURL: "https://ducks-amongus-default-rtdb.firebaseio.com",
  projectId: "ducks-amongus",
  storageBucket: "ducks-amongus.firebasestorage.app",
  messagingSenderId: "167070338297",
  appId: "1:167070338297:web:9a2ca661778fe8d9202628"
};


export const configured =
  Boolean(firebaseConfig.databaseURL) && !JSON.stringify(firebaseConfig).includes("PASTE_HERE");

export const db = configured ? getDatabase(initializeApp(firebaseConfig)) : null;

// Each player gets the first free color when they join.
export const PLAYER_COLORS = [
  "#e5484d", "#3e7bfa", "#30a46c", "#f76b15", "#ffe629", "#8e4ec6",
  "#ff8fd1", "#4fd1e8", "#f4f4f4", "#7a5a43", "#a1e86d", "#2b3346",
];

// Shared game state lives at /game in the database:
// game/status      "lobby" | "playing"
// game/imposters   number chosen on the host screen
// game/players/ID  { name, color, joinedAt, role? }   role is "crewmate" | "imposter"