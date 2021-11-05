import { createContext, useContext, useState, useEffect } from "react";
import { AuthService } from "../service/AuthService";
import SecureLS from "secure-ls";
const authContext = createContext();
var ls = new SecureLS();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
    var getUser = ls.get('user');

    useEffect(() => {
        if(getUser !== null || getUser !== undefined) {
            setUser(getUser.data);
            return;
        }
    }, [])

	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};
	const value = { user, logout, setUser };

	return <authContext.Provider value={value} {...props} />;
}