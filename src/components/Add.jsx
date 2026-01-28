import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocalStorage } from 'react-use';
import toast from "react-hot-toast";

function Add(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [_memoList, setMemoList] = useLocalStorage('memo-list',[]);

  function appendMemo(){
    setMemoList(memoList => [
    ...memoList,
    { id: Date.now(), title, body: content }
  ]);

    toast.success('Successfully addded');
    
    setTitle('');
    setContent('');
  }


  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        value={title}
        id="outlined-basic"
        label="title"
        variant="outlined"
        style={{ marginBottom: '10px' }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <TextField
        value={content}
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <br />
      <Button variant="contained" onClick={appendMemo}>Add</Button>
    </form>
  )
}
export default Add