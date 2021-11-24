import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { color_dark, size } from "style/theme";
import { ThemeContext } from "App";

interface SearchFormProps {
  
}
 
const SearchForm: FC<SearchFormProps> = () => {
  const {isDark} = useContext(ThemeContext);
  const inputClasses = `${inputCls} ${isDark && 'dark'}`;

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

  @media (max-width :${size.labtop}) {
    display: none;
  }  
`;

const inputCls = css`
  padding: 0 2rem;
  height: 90%;
  width: 100%;
  line-height: 1.7;
  border-radius: 50rem;
  border: 1px solid #ccc;
  font-size: 18px;

  &.dark {
    background: ${color_dark.main};
    border: 1px solid #777;
    color: ${color_dark.font};
  }

  &::placeholder {
    color: #ccccd0;
  }
  &.dark::placeholder {
    color: #777;
  }
`;