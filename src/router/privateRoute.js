import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../components/context/auth"

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                authTokens || localStorage.getItem("access_token") ? (
                    <Component {...props} id={props.match.params.id} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { referer: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
