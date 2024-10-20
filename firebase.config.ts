// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDvOafp9lUATZocMRj2hwyKMJWsJuQehzU',
    authDomain: 'splits-b9e3e.firebaseapp.com',
    projectId: 'splits-b9e3e',
    storageBucket: 'splits-b9e3e.appspot.com',
    messagingSenderId: '522767119366',
    appId: '1:522767119366:web:7d0f12ada819cd1523bf87',
    measurementId: 'G-KPNK8XBW9M',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
