var firebaseConfig = {
    apiKey: "AIzaSyAkkg0t1hA0uV1-nonD5tPT7Spjwk7hvk4",
    authDomain: "clone-43a37.firebaseapp.com",
    projectId: "clone-43a37",
    storageBucket: "clone-43a37.appspot.com",
    messagingSenderId: "272247029906",
    appId: "1:272247029906:web:f6548c459fec40c98aa64b",
    measurementId: "G-BK2T6D5JXN"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db=firebase.firestore();