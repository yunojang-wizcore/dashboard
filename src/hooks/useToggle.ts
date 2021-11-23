import { useState } from "react";

type returnType = [boolean, ()=>void];

const useToggle = (init: boolean): returnType => {
  const [isOpen, setIsOpen] = useState<boolean>(init);

  const toggle = () => {
    setIsOpen(now => !now);
  }

  return [
    isOpen, toggle
  ]
}

export default useToggle;