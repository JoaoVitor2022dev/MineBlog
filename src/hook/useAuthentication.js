import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

// hooks de statos
import { useState, useEffect } from "react";

// fucntion do hook 
export const useAuthentication = () => { 
    const [error, setError ] = useState(null);
    const [loading, setLoading] = useState(null); 

 
    // cleanup 
    // deal with memory leak 
    const [cancelled, setCancelled] = useState(false);

    // authenticaçoes
    const auth = getAuth();

    // funcao checka se o cancele é true... e para a execuçao... 
    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }


};