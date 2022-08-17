import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import s from "./NavBar.module.scss";
import GoogleButton from "react-google-button";

function NavBar() {
  const [user] = useAuthState(auth);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.logoWrapper}>
          <h1 className={s.heading}>
            Chat<span className={s.logoTrailing}>App</span>
          </h1>
        </div>
        <div className={s.buttonWrapper}>
          <GoogleButton className={s.googleButton} type="light" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
