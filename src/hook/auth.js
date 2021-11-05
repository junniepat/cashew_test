import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);


	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};
	const value = { user, logout, setUser };

	return <authContext.Provider value={value} {...props} />;
}