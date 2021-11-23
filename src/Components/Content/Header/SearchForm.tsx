import { FC } from "react";
import { css } from "@emotion/css";
import { size } from "style/theme";

interface SearchFormProps {
  
}
 
const SearchForm: FC<SearchFormProps> = () => {
  return (
    <form className={formCls}>
      <input className={inputCls} placeholder="Search..."/>
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

  &::placeholder {
    color: #ccccd0;
  }
`;