import { useState } from "react";
import { useToken } from "../lib/hooks/use-token";
import client from "./client";
import useSWRMutation from 'swr/mutation'
import { API_ENDPOINTS } from "./client/api-endpoints";

export function useLogin() {
    // const [_, setAuthorized] = useAtom(authorizationAtom);
    // const { closeModal } = useModalAction();
    const { setToken } = useToken();
    let [serverError, setServerError] = useState<string | null>(null);
  
    const { trigger, isMutating } = useSWRMutation(API_ENDPOINTS.USERS_LOGIN, client.users.login, 
    //     {
    //   onSuccess: (data) => {
    //     if (!data.token) {
    //       setServerError('The credentials was wrong!');
    //       return;
    //     }
    //     setToken(data.token);
    //     setAuthorized(true);
    //     // closeModal();
    //   },
    //   onError: (error: Error) => {
    //     console.log(error.message);
    //   },
    // }
    );
  
    return { trigger, isMutating, serverError, setServerError };
  }