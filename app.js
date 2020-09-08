
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

mobiscroll.settings = {
        
        lang: 'en',               // Specify language like: lang: 'pl' or omit setting to use default
        theme: 'ios',                       // Specify theme like: theme: 'ios' or omit setting to use default
            themeVariant: 'light'           // More info about themeVariant: https://docs.mobiscroll.com/4-10-6/popup#opt-themeVariant
    };
    
    $(function () {
    
        var centerDemo = $('#demo-center').mobiscroll().popup({
                display: 'center',          // Specify display mode like: display: 'bottom' or omit setting to use default
                buttons: [{                 // More info about buttons: https://docs.mobiscroll.com/4-10-6/popup#opt-buttons
                        text: 'Ok',
                        handler: 'set'
                    },
                    'cancel'
                ],
            }).mobiscroll('getInst');
    
        $('#show-center').click(function () {
            centerDemo.show();
            return false;
        });
    });

messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
  $('#demo-center').html('<div class="mbsc-align-center mbsc-padding"><img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg"><h4>Welcome on our website!</h4><p>Have fun navigating through the demos.</p></div>');
      centerDemo.show();
      return false;
});
