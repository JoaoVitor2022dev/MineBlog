import { db } from "../firebase/config"

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

    // function que vai criar o usario

/* resgister */ const createUser = async ( data ) => { 
 
     // checa se o cancelled esta true, se estiver true... para a function createUser   
      
     checkIfIsCancelled(); 

     // se tudo estiver certo entao vamos coloar o loading como true, pois esta function trabalha com dados... entao demora
   
     setLoading(true);

     // limpar o seterror antes de começar o cadastro 
      
     setError(null);

     // fazer  um try catch agora para caso de erro, que posssamos vizualizar melhor...
 
     try {
        
     // momento que os dados vao para o firebase e sao salvo no firestorege

      const { user } = await createUserWithEmailAndPassword( 
          auth,
          data.email,
          data.password
       );

     // a parte que ele faz o update de depois de salvar o dados...   

     await updateProfile(user, { 
        displayName: data.displayName     
     });

     // por fim retorna o user criado com sucesso
     setLoading(false); 

     return user;

     } catch (error) {
        
      // so fazer o error e deicar ele mais legivel 

      console.log(error.message);
      console.log(typeof error.message);

     // error de sistema, precisamos  tratar ele em portugues... 

     let systemErrorMessage; 

     if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres. "; 
     } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado. "
     } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
     }
   
       setError(systemErrorMessage);
      //  finalizar o loading... 
        setLoading(false);
     }
   };

    // logout - sing out  

    const logout = () => { 

    //  para diminuir as funcitons    
    checkIfIsCancelled()
        
     // apenas usar o metodo
     signOut(auth);
         
    }; 

    // login 

    const login = async(data) => {
        
      checkIfIsCancelled(); 

      setLoading(true); 
      setError(false);

      try {
        
       await signInWithEmailAndPassword(auth, data.email, data.password); 

       setLoading(true); 

      } catch (error) {
         
        let systemErrorMessage; 

        if (error.message.includes("user-not-found")) {
           systemErrorMessage = "Usuario nao encontrado."; 
        } else if (error.message.includes("wrong-password")) {
           systemErrorMessage = "Senha incorreta."
        } else {
           systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        setError(systemErrorMessage);
        
        setLoading(false);
      }

    };

    
   // uma funcitond e user effet so para repetir uma vez e cancelar as outras functions 
   useEffect(() => { 
    return () => setCancelled(true);
   }, []); 

  
  // retornando todos as informaçoes e dados para o externo...

    return  { 
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

};