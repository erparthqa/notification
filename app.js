
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDswpCQP0RYtKWrXhv9SnA9gkRxnE_EOg",
    authDomain: "web-test-462bb.firebaseapp.com",
    databaseURL: "https://web-test-462bb.firebaseio.com",
    projectId: "web-test-462bb",
    storageBucket: "web-test-462bb.appspot.com",
    messagingSenderId: "547115742706",
    appId: "1:547115742706:web:ac204f317be9dfa610676b",
    measurementId: "G-9RPKWD1XY8"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});

messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
  $('#demo-center').html('<div class="mbsc-align-center mbsc-padding"><img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg"><h4>Welcome on our website!</h4><p>Have fun navigating through the demos.</p></div>');
  alert(payload.data.call);    
  //centerDemo.show();
      $('#demo-center').show();
      return false;
});
