import { List } from '@mui/material';
import MemoListItem  from './MemoListItem';
import { useLocalStorage } from 'react-use';

export default function MemosList() {
  const [memoList] = useLocalStorage('memo-list', []);


  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {memoList.map((memoItem) => (
        <MemoListItem key={memoItem.id} memoItem={memoItem} />
      ))}
    </List>
  )
}
