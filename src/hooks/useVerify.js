import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyPayment } from "../services/api";


export function useVerify(){
    const queryClient = useQueryClient();

    const {mutate: verify, IsPending: isVerifying} = useMutation({
        mutationFn: verifyPayment,
            
            

            onSuccess: (data) => {
               
                
                
                //set user data and session in global state
                queryClient.setQueryData(['student'], data.data);

               

    
            },
            onError: (error) => {
                
                throw new Error(error);
                
                
            },

        
    });






  return { verify, isVerifying};

}