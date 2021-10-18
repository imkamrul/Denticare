import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('');

    const [rePassword, setRePassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // console.log(name, email, password, rePassword)

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChnage = e => {
        setEmail(e.target.value)

    }
    const handlepasswordChnage = e => {
        setPassError(" ")
        setPassword(e.target.value);

    }
    const handlepasswordReChnage = e => {
        setPassError(" ")
        setRePassword(e.target.value);

    }
    const registerNewUser = (e) => {
        e.preventDefault();
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // set user name 
    const setUserName = () => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    // email pass log in 
    const processLogin = (e) => {
        setIsLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    //    google sign in 
    const signInWithgoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return { user, signInWithgoogle, setIsLoading, logOut, handleNameChange, handleEmailChnage, handlepasswordReChnage, handlepasswordChnage, registerNewUser, password, rePassword, setUserName, verifyEmail, setPassError, passError, processLogin, isLoading }

}
export default useFirebase;