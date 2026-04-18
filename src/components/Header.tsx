import styles from "./Header.module.scss";
import mealink from "../assets/images/logo_mealink.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {

  const [showMenu,setShowMenu] = useState(false);


  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <Bars3Icon onClick = {() => setShowMenu(true)} className={`${styles.icon} mr-15 ${styles.headerXs}`} />
      {showMenu && 
      <>
      <div onClick = {() => setShowMenu(false)} className="calc"></div>
      <HeaderMenu />
      </>
      }
      <div className="flex-fill">
        <img src={mealink} alt="logo mealink" />
      </div>
      <div className={styles.headerList}>

        <button className="mr-5 btn btn-reverse-primary d-flex align-items-center justify-content-center">
          <CalendarIcon className={`${styles.icon}`} />
          Mon espace
        </button>

        <button className="mr-5 btn btn-primary d-flex align-items-center justify-content-center">
          <UserCircleIcon className={` ${styles.icon}`} />
          Connexion
        </button>
      </div>
    </header>
  );
}

export default Header;
