import React from "react";
import { IconContext } from "react-icons";
import {LAYOUT_STYLES} from "./styles.ts";
import {useAppSelector} from "../../sharedHooks/commonHooks.ts";

interface childrenProps {
  children:  React.ReactNode;
}

const MainLayout = ({ children }: childrenProps) => {
  const { mode } = useAppSelector((state) => state.modeReducer);

  return (
    <IconContext.Provider value={{ color: mode === 'white' ? 'black' : 'white', className: "global-class-name" }}>
      <div className={mode}>
        <div className={LAYOUT_STYLES.MAIN_WRAPPER}>
          <div className={LAYOUT_STYLES.INNER_WRAPPER}>
            { children }
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default MainLayout
