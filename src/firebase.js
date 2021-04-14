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
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        console.log('enter register in firebase.js')
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error.message);
            })
        return this.auth.currentUser.updateProfile({
            displayName: name
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