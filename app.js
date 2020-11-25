
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

function play_single_sound() {
		document.getElementById('audiotag1').play();
	}

function startPlayback() {
  return document.querySelector('#music').play();
}

ChromeSamples.log('Attempting to play automatically...');

startPlayback().then(function() {
  ChromeSamples.log('The play() Promise fulfilled! Rock on!');
}).catch(function(error) {
  ChromeSamples.log('The play() Promise rejected!');
  ChromeSamples.log('Use the Play button instead.');
  ChromeSamples.log(error);

  var playButton = document.querySelector('#play');
  // The user interaction requirement is met if
  // playback is triggered via a click event.
  playButton.addEventListener('click', startPlayback);
  playButton.hidden = false;
});

messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
	startPlayback();
  //$('#demo-center').html('<div class="mbsc-align-center mbsc-padding"><img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg"><h4>Welcome on our website!</h4><p>Have fun navigating through the demos.</p></div>');
  //alert(payload.data.call);
//   $('#ringme').click();
// play_single_sound();
  // WAVE SOUND TOGGLE
//   var source = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
//   $.playSound(source);
//     playSound(source);
//   var audio = new Audio(); // use the constructor in JavaScript, just easier that way
//   audio.addEventListener("load", function() {
//       audio.play();
//   }, true);
//   audio.src = source;
//   audio.autoplay = true;
//   audio.loop = true;
//   audio.volume = 1.0;

//   $('.audio').click();
//   var playing = true;
//   $('.audio').on('click', function(e) {
//       if (playing == false) {
//           audio.play();
//           playing = true;

//       } else {
//           audio.pause();
//           playing = false;
//       }
//   });
  
//   //centerDemo.show();
//       $('#demo-center').show();
//       return false;
});

function playSound(url){   
  document.getElementById("sound").innerHTML="<embed src='"+url+"' hidden=true autostart=true loop=false>";
} 

