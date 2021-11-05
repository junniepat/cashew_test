import axios from "axios";


export type FormArgs = {
    email: string;
    password: string;
  };

  export const AuthService = {
    login: ({ email, password }: FormArgs) => {
        return axios.post(`https://reqres.in/api/login`, {
            email, password
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw error?.response?.data;
        })
    }
}