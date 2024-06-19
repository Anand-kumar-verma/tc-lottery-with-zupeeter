import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/images/zupee.png"
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import down from "../assets/ZUPEETER.pdf";

const drawerWidth = 260;
const navItems = [
  { text: 'Games', path: '/' },
  { text: 'Download', path: down },
  { text: 'Sign In', path: '/login' },
  { text: 'Register', path: '/register' }
];
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h6" sx={{ my: 2 }} className='!flex !justify-between'>
      <img src={logo} alt='' className='!w-[150px] mx-2 '/>
      <CloseIcon className='!bg-blue-900 !text-white !mx-2' onClick={()=>(false)} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
        <ListItem
      
        key={item.text}
        disablePadding 
        onClick={(e) => {
          if (item.text === 'Download') {
            // handleDownload(item.path ,e);
            window.location.href=item.path
            // handleDrawerToggle();
          }
          else
          {
            navigate(item.path)
          }
        }}>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar  component="nav" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
      <img src={logo} alt='' className='lg:hidden !w-[150px] mr-28 '/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={logo} alt='' className='!w-[150px]'/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
               <Button className='  !mx-5' component={item.path.startsWith('http') ? 'a' : Link} to={!item.path.startsWith('http') ? item.path : undefined} href={item.path.startsWith('http') ? item.path : undefined} key={item.text} sx={{ color: '#4611a7' }}>
               {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
