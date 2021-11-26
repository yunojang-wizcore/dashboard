import { useEffect, useState } from "react";

type ReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useDetectOusideClick = (el: HTMLElement|null, initState: boolean): ReturnType => {
  const [isActive, setIsActive] = useState<boolean>(initState);

  useEffect(()=>{
    const clickEvent = (e:MouseEvent) => {
      const target = e.target as Node | null;

      if(el && !el.contains(target)) {
        setIsActive(false);
      }
    } 
    
    if (isActive) {
      window.addEventListener('click', clickEvent);
    }
    return () => {
      window.removeEventListener('click', clickEvent);
    }
  },[isActive, el])

  return [isActive, setIsActive];
}

export default useDetectOusideClick;