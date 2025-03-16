// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your Firebase configuration (use your own credentials here)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to sign up users
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "Signup successful!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Error: " + error.message;
    });
}

// Function to log in users
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "Login successful!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Error: " + error.message;
    });
}

// Function to log out users
function logout() {
  signOut(auth)
    .then(() => {
      document.getElementById("status").innerText = "Logged out successfully!";
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Error: " + error.message;
    });
}
