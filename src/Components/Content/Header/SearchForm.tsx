import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { color_dark, size } from "style/theme";
import { ThemeContext } from "App";
import Theme from "types/theme";

interface SearchFormProps {
  
}
 
const SearchForm: FC<SearchFormProps> = () => {
  const { theme } = useContext(ThemeContext);
  const inputClasses = `${inputCls} ${theme === Theme.DARK && 'dark'}`;

  return (
    <form className={formCls}>
      <input className={inputClasses} placeholder="Search..."/>
    </form>
  );
}
 
export default SearchForm;

const formCls = css`
  height: 100%;
  width: 22em;

  @media (max-width :${size.tablet.min}px) {
    display: none;
  }  
`;

const inputCls = css`
  width: 100%;
  height: 90%;
  padding: 0 2rem;
  line-height: 1.7;
  font-size: 18px;
  
  border-radius: 50rem;
  border: 1px solid #ccc;
  
  &.dark {
    background: ${color_dark.main};
    border: 1px solid #334455;
    color: ${color_dark.font};
  }

  &::placeholder {
    color: #ccccd0;
  }

  &.dark::placeholder {
    color: #334455;
  }
`;