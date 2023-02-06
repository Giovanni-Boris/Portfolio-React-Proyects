import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
	user: {
		_id: "62247bb17bd40d303d6da510",
		username: "boris",
		email: "boris@gmail.com",
		profilePicture: "person/1.jpeg",
		coverPicture: "",
		followers: [],
		isAdmin: false,
		followings: ["62247b717bd40d303d6da50e"],
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
