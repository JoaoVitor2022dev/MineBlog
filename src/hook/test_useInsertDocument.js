import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import { collection, addDoc , Timestamp } from "firebase/firestore"; 

export const useInsertPost = ( docCollection )  => {
  
   const [error, setError] = useState(null); 
   const [loading, setLoading] = useState(null); 
   const  [concluido, setConcluido] = useState(null); 
   
   const [cancelled , setCancelled] = useState(false); 

   function checkIfIsCancelled() {
       if (cancelled) {
         return; 
       }
   }
 
   const createPost = async ( post) => { 
 
    checkIfIsCancelled(); 

    setError(null); 

    try {
  
    setLoading(true);    

    const newDocument = { ...post, createdAt: Timestamp.now() };

    const insertedDocument = await addDoc(
          collection(db, docCollection),
          newDocument
    );

    setConcluido(insertedDocument); 

    setLoading(false); 
      
    } catch (error) {
     
    let systemErrorMessage;     
        
    systemErrorMessage = error.message; 

    setError(systemErrorMessage)

    }

    };

    useEffect(() => {
      setCancelled(true);
    },[])
    

    return {  createPost , concluido , loading , error };
    
};