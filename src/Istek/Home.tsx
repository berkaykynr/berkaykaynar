import React, { useEffect, useState } from "react";
import Main from "./Main";
import SignIn from "./SignIn";

export default function Home() {
  const [isAuth, setIsAuth] = useState<any>(
    localStorage.getItem("isAuth") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  if (isAuth) return <Main setIsAuth={setIsAuth} />;
  else return <SignIn setIsAuth={setIsAuth} />;
}
