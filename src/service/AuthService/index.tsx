import axios from "axios";


export type FormArgs = {
    email: string;
    password: string;
  };

  export const AuthService = {
    login: async ({ email, password }: FormArgs) => {
        try {
            const user = await axios.post(`https://reqres.in/api/login`, {
                email, password
            });
            return { user };
          } catch (error) {
            return { error: (error as Error)?.response?.data };
          }
    }
}