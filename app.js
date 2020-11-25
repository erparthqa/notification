// dJ-taXhudYX1Jg3PRxk7Ri:APA91bFclgj1wpgITNmUHQAA_sG56HLap5PsmJ-3CusZfvTofs0DlX5dmVO4agV_8kGUwLZSWsmZxVRQElzm2-eLX2eVam65mVqfmnoBxTSwFf8eR2ySSuaGHg4mwNnwCZDxnRxuz9i7

const load = () => {

    console.log("load event detected!");
    const myButton = document.getElementById('myButton');
    const myHeading = document.getElementById('myHeading');
    myButton.addEventListener('click', () => { myHeading.style.color = 'red'; });
    myButton.click();

    // Audio.prototype.play = (function(play) {
    //     return function () {
    //         var audio = this,
    //             args = arguments,
    //             promise = play.apply(audio, args);
    //         if (promise !== undefined) {
    //             promise.catch(_ => {
    //                 // Autoplay was prevented. This is optional, but add a button to start playing.
    //                 var el = document.createElement("button");
    //                 el.innerHTML = "Play";
    //                 el.addEventListener("click", function(){play.apply(audio, args);});
    //                 this.parentNode.insertBefore(el, this.nextSibling)
    //             });
    //         }
    //     };
    // })(Audio.prototype.play);

    // Try automatically playing our audio via script. This would normally trigger and error.
    // document.getElementById('MyAudioElement').muted = false;
    // document.getElementById('MyAudioElement').play();

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
    // function startPlayback() {
    //     // document.getElementById('music').muted = false;
    //     document.querySelector('#music').play();
    // }
    //
    // startPlayback().then(function () {
    //     console.log('The play() Promise fulfilled! Rock on!');
    // }).catch(function (error) {
    //     console.log(error);
    //
    //     const playButton = document.querySelector('#play');
    //     // The user interaction requirement is met if
    //     // playback is triggered via a click event.
    //     playButton.addEventListener('click', startPlayback);
    //     playButton.hidden = true;
    // });

    messaging.onMessage(function (payload) {
        console.log('onMessage: ', payload);
        const source = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
        const audio = new Audio(); // use the constructor in JavaScript, just easier that way
        audio.addEventListener("load", function() {
            audio.play();
        }, true);
        audio.src = source;
        audio.autoplay = false;
        audio.defaultMuted = true;
        audio.loop = true;
        $('.audio').click();
        let playing = true;
        if (playing === true){
            audio.defaultMuted = false;
        }

        $('body').on('click', '.audio',function(e) {
            if (playing === false) {
                audio.play();
                playing = true;
            } else {
                audio.pause();
                playing = false;
            }
        });


        //$('#demo-center').html('<div class="mbsc-align-center mbsc-padding"><img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg"><h4>Welcome on our website!</h4><p>Have fun navigating through the demos.</p></div>');

        // WAVE SOUND TOGGLE
        // $('.audio').click();
        // let playing = true;
        // $('.audio').on('click', function(e) {
        //     if (playing == false) {
        //         audio.play();
        //         playing = true;
        //     } else {
        //         audio.pause();
        //         playing = false;
        //     }
        // });

//       $('#demo-center').show();
//       return false;
    });

}
window.onload = load;
