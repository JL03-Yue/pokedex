import { Healing, LocalConvenienceStoreOutlined } from '@material-ui/icons';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_obnisRbBUdlEKx5FAxvUiY2_JTg6oNo",
    authDomain: "pokedex-auth-74411.firebaseapp.com",
    projectId: "pokedex-auth-74411",
    storageBucket: "pokedex-auth-74411.appspot.com",
    messagingSenderId: "151844885056",
    appId: "1:151844885056:web:f1c90e961f60e853e005a5",
    measurementId: "G-NFT449NTC0"
};


class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }


    login(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(111, user)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }



    logout() {
        return this.auth.signOut()
    }

    async resetPassword(emailAddress) {

        var auth = firebase.auth();
        auth.fetchSignInMethodsForEmail(emailAddress)
            .then(result => {
                console.log('sen',result)

                if (result.length > 0) {
                    auth.sendPasswordResetEmail(emailAddress)
                    .then(res=>{
                        console.log('send ok')
                    })
                    .catch((error) => {
                        console.log("Error Sending Email", error);
                    });
                }
            })
            .catch(function (error) {
                // An error happened.
            });
    }

    async register(name, email, password) {
        console.log('enter register in firebase.js')
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    // addPokeman(pokeman){
    //     if(!this.auth.currentUser){
    //         return alert('Not authorized')
    //     }
    //     return this.db.doc(`users_condedamn_video/$`)
    // }
}

export default new Firebase()