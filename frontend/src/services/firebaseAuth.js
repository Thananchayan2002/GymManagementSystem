import { initializeApp } from 'firebase/app';
import {
  
  initializeAuth,
  
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCs0I88-fRGs_owuQoPdqbFUDY0QBBEl9Q",
  authDomain: "gymmanagementsystem-47b1b.firebaseapp.com",
  projectId: "gymmanagementsystem-47b1b",
  storageBucket: "gymmanagementsystem-47b1b.firebasestorage.app",
  messagingSenderId: "842001525470",
  appId: "1:842001525470:web:92dcdce0d7c3b26b55304f"
};


  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app)
   

export default auth;
