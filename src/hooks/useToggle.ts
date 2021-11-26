import { Dispatch, SetStateAction, useState } from "react";

type returnType = [boolean, ()=>void, Dispatch<SetStateAction<boolean>>];

const useToggle = (init: boolean): returnType => {
  const [isOpen, setIsOpen] = useState<boolean>(init);

  const toggle = () => {
    setIsOpen(now => !now);
  }

  return [
    isOpen, toggle, setIsOpen
  ]
}

export default useToggle;