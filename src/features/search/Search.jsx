import { TextField } from "@mui/material";
import MemosList from "../home/MemosList";
import { useState } from "react";

function Search(){
  const [searchItem, setSearchItem] = useState("");


  return (
    <>
      <TextField 
        id="outlined-basic" 
        label="Memo title" 
        variant="outlined"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem} />
      <MemosList searchItem={searchItem}/>
    </>
  );
}
export default Search;