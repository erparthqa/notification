// dJ-taXhudYX1Jg3PRxk7Ri:APA91bFclgj1wpgITNmUHQAA_sG56HLap5PsmJ-3CusZfvTofs0DlX5dmVO4agV_8kGUwLZSWsmZxVRQElzm2-eLX2eVam65mVqfmnoBxTSwFf8eR2ySSuaGHg4mwNnwCZDxnRxuz9i7
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
messaging.requestPermission().then(function () {
    return messaging.getToken();
}).then(function (token) {
    console.log(token);
})
.catch(function (err) {
    console.log('Permission denied', err);
});

const source = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
const audio = new Audio(); // use the constructor in JavaScript, just easier that way
audio.addEventListener("load", function() {
    audio.play();
}, true);
audio.src = source;
audio.autoplay = true;
audio.loop = true;
audio.volume = 1.0;

function startPlayback() {
    let ringbel = document.querySelector('#music');
    return ringbel.play();
}

startPlayback().then(function () {
    console.log('The play() Promise fulfilled! Rock on!');
}).catch(function (error) {
    console.log(error);

    const playButton = document.querySelector('#play');
    // The user interaction requirement is met if
    // playback is triggered via a click event.
    playButton.addEventListener('click', startPlayback);
    playButton.hidden = true;
});

messaging.onMessage(function (payload) {
    console.log('onMessage: ', payload);
    //$('#demo-center').html('<div class="mbsc-align-center mbsc-padding"><img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg"><h4>Welcome on our website!</h4><p>Have fun navigating through the demos.</p></div>');

    // WAVE SOUND TOGGLE
    $('.audio').click();
    let playing = true;
    $('.audio').on('click', function(e) {
        if (playing == false) {
            audio.play();
            playing = true;
        } else {
            audio.pause();
            playing = false;
        }
    });

//       $('#demo-center').show();
//       return false;
});


