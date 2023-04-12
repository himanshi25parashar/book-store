import React,{useState} from 'react';
import { AppBar, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material';
import { bgcolor, Box } from '@mui/system';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false)
  //hundle menu click
  const hundleDrawerToggle =() => {
    setmobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box>
      <Typography className='logo' color={'orange'} variant="h6" componant="div"  
        >
          
          𝑴𝒚 𝒃𝒐𝒐𝒌 𝒔𝒕𝒐𝒓𝒆
          </Typography> 
          <Divider />
          <ul className="mobile">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/category'}>category</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
           </ul>
        
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar componant={'nav'} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton color='inherit' aria-label='Open drawer' edge='Start' sx={{ mr:2, display: { sm: "none"},}}
          onClick={hundleDrawerToggle}
          >
            <MenuOpenIcon />
        </IconButton>
        <Typography color={'orange'} variant="h6" componant="div"  sx={{flexGrow: 1, fontWeight: 'bold',fontSize:'30px'}} 
        >
          
          M̶y̶ ̶b̶o̶o̶k̶ ̶s̶t̶o̶r̶e̶</Typography>
        </Toolbar>
        <Box sx={{display: { xs:"none", sm: "block" } }} >
          <ul className="navigation">
            <li>
              <Link to={'/'}>𝐇𝐨𝐦𝐞</Link>
            </li>
            <li>
              <Link to={'/about'}>𝐀𝐛𝐨𝐮𝐭</Link>
            </li>
            <li>
              <Link to={'/category'}>𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲</Link>
            </li>
            <li>
              <Link to={'/contat'}>𝐂𝐨𝐧𝐭𝐚𝐜𝐭</Link>
            </li>
           </ul>
        </Box>

      </AppBar>
      <Box componant='navbar'>
       <Drawer variant="temporary" open={mobileOpen} onClose={hundleDrawerToggle}
        sx={{display: {sm:'none', xm: 'block'},
         "& .MuiDrawer-paper":{boxSizing: "border-box", width:'200px'}}}>
        {drawer}
       </Drawer>
      </Box>
      <Box sx={{ p:1 }}>
       <Toolbar />
      </Box>
    </Box>
    </>
  )
}

export default Header
