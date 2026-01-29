import { Fab, TextField, Button } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"
import { useLocalStorage } from "react-use"

function MemoItem(){
  const { memoId } = useParams();
  const navigate = useNavigate();
  const [memoList, setMemoList] = useLocalStorage('memo-list')

  const currentMemoItem = memoList.find(
    (memoItem) => Number(memoItem.id) === Number(memoId)
  );
  const [title, setTitle] = useState(currentMemoItem.title);
  const [content, setContent] = useState(currentMemoItem.body);

  //更新备忘录列表
  function updateMemoList(){
    const newMemoList = memoList.map((memoItem) => {
      if(Number(memoItem.id) === Number(memoId)){
        return{
          ...memoItem,
          title,
          body: content
        };
      }
      return memoItem
    });

    setMemoList(newMemoList);
    setTitle('');
    setContent('');

    //成功的弹窗
    toast.success('Successfully update!');
    navigate('/'); //返回首页
  }


  return(
    <form style={{ textAlign: 'center', marginTop:'80px' }}>
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
      <Button variant="contained" onClick={updateMemoList}>Update</Button>

      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: 80, right: 40 }}
        onClick={()=> navigate('/')}>
        <HouseIcon />
      </Fab>
    </form>
  )
    
}
export default MemoItem