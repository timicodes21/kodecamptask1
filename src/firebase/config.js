import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBQHqcRzCHJ6zmeYO0rrVPQcd66FzzHe4M",
	authDomain: "student-app-96951.firebaseapp.com",
	projectId: "student-app-96951",
	storageBucket: "student-app-96951.appspot.com",
	messagingSenderId: "275509603784",
	appId: "1:275509603784:web:33928c8a955105debbe4fd",
	measurementId: "G-LYYFRNSG47"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();