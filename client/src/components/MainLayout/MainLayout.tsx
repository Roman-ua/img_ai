import React from "react";
import { IconContext } from "react-icons";
import {useSelector} from "react-redux";

interface childrenProps {
  children:  React.ReactNode;
}

const MainLayout = ({ children }: childrenProps) => {
  const { mode } = useSelector((state: any) => state.modeReducer);

  return (
    <IconContext.Provider value={{ color: mode === 'white' ? 'black' : 'white', className: "global-class-name" }}>
      <div className={mode}>
        <div className="bg-white text-slate-800 dark:bg-slate-800 dark:text-white h-screen">
          <div className="container mx-auto">
            { children }
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default MainLayout
