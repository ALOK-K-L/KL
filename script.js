document.addEventListener("DOMContentLoaded", function () {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID",
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Ensure elements exist before adding event listeners
    document.getElementById("signup-btn").addEventListener("click", function () {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Signup successful!");
                console.log("User Created:", userCredential.user);
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            });
    });

    document.getElementById("login-btn").addEventListener("click", function () {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Login successful!");
                console.log("User Logged In:", userCredential.user);
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            });
    });

    document.getElementById("logout-btn").addEventListener("click", function () {
        auth.signOut()
            .then(() => {
                alert("Logged out successfully!");
                console.log("User Logged Out");
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            });
    });
});
