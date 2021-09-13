 <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCXhgkjKKZvoc7TD6BX-4zf8xOI0mbPvgw",
    authDomain: "colectiva-a9328.firebaseapp.com",
    projectId: "colectiva-a9328",
    storageBucket: "colectiva-a9328.appspot.com",
    messagingSenderId: "603650161337",
    appId: "1:603650161337:web:d635f1db1087bf92b8f968",
    measurementId: "G-K01MZVNKYC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
