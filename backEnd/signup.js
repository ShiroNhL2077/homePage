
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";



const firebaseConfig = {
  apiKey: "AIzaSyDxFtzIYDXRToVKQwtjlOc9LEtJMPyjGtA",
  authDomain: "xmsproj.firebaseapp.com",
  databaseURL: "https://xmsproj-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xmsproj",
  storageBucket: "xmsproj.appspot.com",
  messagingSenderId: "973187486852",
  appId: "1:973187486852:web:cff6d0285eecdb994f1ed1",
  measurementId: "G-F297ZQV7RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const form = document.getElementById("form");

function submitForm(e) {
    e.preventDefault();
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    saveForm(userName, email, password);
    alert("Jawek Mriguel");
    form.reset();
  }

  function saveForm(iuser, iemail, ipassword) {
    set(ref(database, "users/"+iuser),{
        USERNAME : iuser,
        EMAIL : iemail,
        PASSWORD : ipassword
    })
}
form.addEventListener("submit", (e) => submitForm(e));