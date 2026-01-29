import List from '@mui/material/List';
import MemoListItem from '../memo-list/MemoListItem';
import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function MemoList({ searchItem = '' }) {
  const [memoList, setMemoList] = useLocalStorage('memo-list', []);
  const [filteredMemoList, setFilteredMemoList] = useState(memoList);

  useEffect(() => {
    if (searchItem === '') {
      setFilteredMemoList(memoList);
      return;
    }

    setFilteredMemoList(
      memoList.filter((memoItem) =>
        memoItem.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem]);

  function deleteMemo(id){
    setMemoList((memoList) => 
    memoList.filter((memoItem) => memoItem.id !== id));

    toast.error("Successfully delete!")
  };

  useEffect(()=>{
    setFilteredMemoList(memoList)
  },[memoList])

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {filteredMemoList.map((memoItem) => (
        <MemoListItem 
          memoItem={memoItem} 
          key={memoItem.id}
          deleteMemo={deleteMemo} />
      ))}
    </List>
  );
}