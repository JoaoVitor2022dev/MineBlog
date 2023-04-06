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
    }

    useEffect(() => {
 
    async function loadData() {
        if (cancelled) return
 
        setLoading(true); 

        const collectionRef = await collection(db, docCollection)

        try {
             
        let que; 

        // busca 
        // dashbord

         que = await  query(collectionRef, orderBy("createdAt", "desc")); 

        await onSnapshot(que, (querySnapshot) => {
 
         setDocuments(
            querySnapshot.docs.map((doc) => ( {
                id: doc.id,
                ...doc.data(),
            }))
         )    
     }) 

        setLoading(false);

        } catch (error) {
           console.log(error);
           setError(error.message) 
        }
    }    
 
    loadData();

    }, [docCollection, search, uid, cancelled])
 
    useEffect(() => {
       return () => setCancelled(true);
    },[])
 
    return { documents, error , loading }
};

