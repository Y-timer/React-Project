import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocalStorage } from 'react-use';
import toast from "react-hot-toast";

function Add(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [_memoList, setMemoList] = useLocalStorage('memo-list');

  function appendMemo(){

    setMemoList((memoList) => [
      ...memoList,
      {id: Date.now(), title, body: content}
    ]);

    toast.success('Successfully addded');
    
    setTitle('');
    setContent('');
  }


  return (
    <from style={{ textAlign: 'center' }}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        style={{ marginBottom: '10px' }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <TextField 
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <br />
      <Button variant="contained" onClick={appendMemo}>ADD</Button>
    </from>
  )
}
export default Add