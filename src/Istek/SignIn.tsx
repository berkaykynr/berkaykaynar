import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "./custom.scss";

export default function SignIn({ setIsAuth }: { setIsAuth: any }) {
  const toast = useRef<Toast>(null);
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();

  const showUsername = () => {
    if (toast.current)
      toast.current.show({
        severity: "error",
        summary: "Hata",
        detail: "Kullanıcı Adı hatalı",
      });
  };
  const showPassword = () => {
    if (toast.current)
      toast.current.show({
        severity: "error",
        summary: "Hata",
        detail: "Şifre hatalı",
      });
  };

  function handleSignIn() {
    if (username.trimEnd() === "omer" || username.trimEnd() === "ömer") {
      if (password === "3455" || password === "5534") {
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
      } else {
        console.log("şifre yanlış");
        showPassword();
      }
    } else {
      console.log("kullanıcı adı yanlış");
      showUsername();
    }
  }
  return (
    <div className="flex w-screen h-screen align-items-center justify-content-center">
      <Toast ref={toast} />
      <div className="customBackgroundContainer shadow-8 py-6 flex flex-column align-items-center justify-content-evenly lg:w-5 sm:w-11 w-11 md:w-11 gap-6 border-round-2xl">
        <img src="/images/istek.png" alt="istek" />
        <div className="customBackground h-full w-full" />
        <div className="flex flex-column w-full align-items-center gap-3">
          <InputText
            className="shadow-none h-3rem lg:w-4 w-8"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputText
            type="password"
            className="shadow-none h-3rem lg:w-4 w-8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          onClick={handleSignIn}
          className="shadow-none"
          label="Giriş Yap"
          severity="secondary"
        />
      </div>
    </div>
  );
}
