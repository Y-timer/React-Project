import { Outlet } from 'react-router-dom';

import NavBar from "./Navbar";
import ButtomNavBar from "./ButtomNavBar";
import { Toaster } from "react-hot-toast"

function AppLayout(){
  return (
    <>
      <NavBar />
      <div style={{ marginBottom:'56px', marginTop: '70px', zIndex: '0', textAlign: 'center'  }}>
        <Outlet />
      </div>
      <ButtomNavBar />
      <Toaster />
    </>
  )
}
export default AppLayout