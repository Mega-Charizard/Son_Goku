
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDUU04zoizxfWTJxCYmmA8LNlYm8WHOYyk",
      authDomain: "back-to-school-chats.firebaseapp.com",
      projectId: "back-to-school-chats",
      storageBucket: "back-to-school-chats.appspot.com",
      messagingSenderId: "299527438139",
      appId: "1:299527438139:web:a85a378678469ba374c11e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout()
{

}