import {createContext, useContext, useEffect, useState} from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkModeHtml(!darkMode);
  }

  // Provider가 처음으로 마운트 되었을때 실행
  useEffect(() => {
    // 로컬 저장소에 dark 테마를 저장해두었거나 윈도우 설정이 dark일때 true
    const isDark =
    localStorage.theme === 'dark'
    || (
      !('theme' in localStorage)
      && window.matchMedia('(prefers-color-scheme:dark)').matches
    );
    setDarkMode(isDark);
    updateDarkModeHtml(isDark);
  }, []);
  
// ******************************************
  return(
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
function updateDarkModeHtml(darkMode){
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

// ******************************************
// 다크모드 hook 만들기
export const useDarkMode = () => useContext(DarkModeContext);