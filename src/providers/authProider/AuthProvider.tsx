import React, { createContext, useEffect, useState } from "react";
import { CtxUser } from "../../server/context";
import { verifyJwt } from "../../utils/jwt";
import { getCookie } from 'cookies-next';

export interface AuthInterface {
  sessionUser?: CtxUser;
  children?: React.ReactElement;
}

export const AuthContext = createContext({} as AuthInterface);

export const AuthorisedOnlyProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const sessionUser = useSessionUser();

  return sessionUser ? (
    <AuthContext.Provider value={{ sessionUser }}>
      {children}
    </AuthContext.Provider>
  ) : null;
};

export const useSessionUser = () => {
  const [user, setUser] = useState<CtxUser | undefined>(undefined);

  // const sessionToken = Cookies.get("token");
  const sessionToken = getCookie("token")?.toString()
  useEffect(() => {
    if (sessionToken && sessionToken.length > 0) {
      const sessionUser = verifyJwt(sessionToken || "");
      setUser(sessionUser as CtxUser);
    }
  }, [sessionToken]);
  return user;
};

export const useUserAuthenticated = () => {
  const user = useSessionUser();
  return (user && user.id)? true : false;
};