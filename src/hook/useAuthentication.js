import { async } from "@firebase/util";
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

    const createUser = async ( data ) => { 
 
     // checa se o cancelled esta true, se estiver true... para a function createUser   
      
     checkIfIsCancelled(); 

     // se tudo estiver certo entao vamos coloar o loading como true, pois esta function trabalha com dados... entao demora
   
     setLoading(true);

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

     return user;

     } catch (error) {
        
      // so fazer o error e deicar ele mais legivel 

      console.log(error.message);
      console.log(typeof error.message);
     }

     //  finalizar o loading... 

     setLoading(false);

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
        loading
    }

};