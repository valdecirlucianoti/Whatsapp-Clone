import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export class Firebase {

    constructor() {

        this._config = {
            apiKey: "AIzaSyCf87JdQliKHqSvXBrGIBy0cvRr3rUlQ-k",
            authDomain: "whatsapp-clone-e07f7.firebaseapp.com",
            projectId: "whatsapp-clone-e07f7",
            storageBucket: "gs://whatsapp-clone-e07f7.appspot.com",
            messagingSenderId: "694769721712",
            appId: "1:694769721712:web:d2dbf608378d0c02446fb5"
        }

        this.init();
    }

    initAuth() {
        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result => {

                let token = result.credential.accessToken;
                let user = result.user;
                s({
                    user,
                    token
                });

            }).catch(err => {
                console.error(err);
            });

        });
    }

    init() {

        if (!window._initializedFirebase) {
            // Initialize Firebase
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;
        }

    }

    //firestore
    static db() {
        return firebase.firestore();
    }

    //firebase storage
    static hd() {
        return firebase.storage();
    }
}