import React from 'react';
import styles from './Header.module.css';
import {useDarkMode} from "../../context/DarkModeContext";
import {HiMoon, HiSun} from "react-icons/hi";

export default function Header({Types, selectedType, setSelectedType}) {
// ******************************************
  const {darkMode, toggleDarkMode} = useDarkMode();
// ******************************************
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon/>}
        {darkMode && <HiSun/>}
      </button>
      <div className={styles.typeBtnBox}>
        {Types.map((type, index) =>
            <button
              key={index}
              type="button"
              onClick={()=>setSelectedType(type)}

              className={`
              ${styles.typeBtn}
              ${selectedType === type && styles.selected}
              `}
            >
              {type}
            </button>
          )
        }
      </div>
    </header>
  );
};