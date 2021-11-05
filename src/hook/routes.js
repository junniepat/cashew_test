import React from "react";
import { Route, Navigate } from 'react-router-dom';



export const PrivateRoute = ({ component: Component, redirectTo, isAuth, path, ...props }) => {
    if(!isAuth) {
        return <Navigate to={redirectTo} />;
    }
    return <Route path={path} element={<Component />} />
};

// export function withProtected(Component) {
//   return function WithProtected(props) {
//     const auth = useAuth();


//     if (!auth.user) {
//         <Route path="/" />;
//       return <h1>Loading...</h1>;
//     }
//     return <Component auth={auth} {...props} />;
//   };
// }