import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query , orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = ( docCollection, search = null, uid = null ) => {
    
   const [documents, setDocuments ] = useState(null); 
   const [error, setError] = useState(null); 
   const [loading, setLoading] = useState(null); 

   // memory leak
   const [cancelled, setCancelled] = useState(false);
 
   function checkIfIsCancelled() {
    if (cancelled) {
        return;
    }


    useEffect(() => {
 
    async function loadData() {
        if (cancelled) return
 
        setLoading(true); 

        const collectionRef = await collection(db, docCollection)

 
        try {
            
        } catch (error) {
            
        }


    }    

    }, [docCollection, search, uid, cancelled])

}

};