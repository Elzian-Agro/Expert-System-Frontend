import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const history = useNavigate();
  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  // eslint-disable-next-line no-unused-vars
  const [usercookies, setUserCookie, removeUserCookie] = useCookies(["user"]);

  React.useEffect(() => {
    if (cookies.token) {
      setLoggedIn(true);
    }
  }, []);
  const login = () => {
    axios
      .post("https://elzian-agro-user-auth.herokuapp.com/auth/login", loginUser)
      .then((res) => {
        setloginUser({
          email: "",
          password: "",
          userType: res.data.userType,
        });
        // store data in cookies
        setCookie("token", res.data.token, {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 1000 * 60 * 60 * 24,
        });
        setUserCookie("user", res.data.user, {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 1000 * 60 * 60 * 24,
        });
        setLoggedIn(true);
        history("/dashboard");
      })
      .catch((res) => {
        toast.error(res.response.data);
      });
  };

  const logout = () => {
    setLoggedIn(false);
    removeCookie("token", { path: "/" });
    removeUserCookie("user", { path: "/" });
    axios
      .get("https://elzian-agro-user-auth.herokuapp.com/auth/logout", {
        headers: { "x-auth-token": cookies.token },
      })
      .then(() => {});
    // navigate the user to the sign in page after a successful logout
    history("/authentication/sign-in");
  };

  const AuthContextValue = {
    loginUser,
    setloginUser,
    login,
    loggedIn,
    logout,
  };

  return <AuthContext.Provider value={AuthContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
