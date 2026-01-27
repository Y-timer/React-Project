import { useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function ButtomNavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    if(value === 0){
      navigate('/');
      return;
    }
    if(value === 1){
      navigate('/add');
      return;
    }
    if(value === 0){
      navigate('/search')
    }
  },[value]);

  return (
    <Box style={{ position: 'fixed', bottom: '0', width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" icon={<AddBoxIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}