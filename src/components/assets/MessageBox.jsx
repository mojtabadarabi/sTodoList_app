import React, { useEffect, useRef } from 'react'
import style from './messageBox.module.css'

function MessageBox({children,close}) {
    const outSide = useRef()

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);
    
      const handleClickOutside = event => {
        if (outSide.current && !outSide.current.contains(event.target)) {
          close()
        }
      };

    return (
        <div className={style.boxContainer} >
            <div className={style.container}>
            </div>
            <div ref={outSide}>
                {children}
            </div>
        </div>
    )
}

export default MessageBox
