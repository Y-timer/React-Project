import { useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ButtomNavBar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    //从location中解构出pathname 解构出路径名称
    const { pathname } = location

    if(pathname === '/'){
      setValue(0);
    }
    if(pathname === '/add'){
      setValue(1);
    }
    if(pathname === '/search'){
      setValue(2);
    }
  },[location.pathname]);

  return (
    <Box style={{ position: 'fixed', bottom: '0', width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />} 
          onClick={()=>navigate('/')}/>
        <BottomNavigationAction 
          label="Add" 
          icon={<AddBoxIcon />} 
          onClick={()=>navigate('/add')}/>
        <BottomNavigationAction 
          label="Search" 
          icon={<SearchIcon />} 
          onClick={()=>navigate('/search')}/>
      </BottomNavigation>
    </Box>
  );
}