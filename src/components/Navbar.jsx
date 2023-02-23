import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import React, { useState } from 'react';
import { Box, } from '@mui/system';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between",
});

 const Search = styled("div") (({ theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
 }));

 const Icons = styled(Box) (({ theme }) =>  
 ({ display:"none", alignItems:"center" , gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
 }));

 const UserBox = styled(Box) (({ theme }) =>  
 ({ display:"flex", alignItems:"center" , gap: "10px",
 [theme.breakpoints.up("sm")]:{
    display: "none"
  }
 }));
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky"> 
    <StyledToolbar> 
        <Typography variant="h6" sx={{display:{xs: "none", sm: "block"}}}>LAMA DEV</Typography>
        <PetsIcon sx={{display:{xs: "block", sm: "none"}}}/>

        <Search><InputBase placeholder="search..."/> Search</Search>
        <Icons>
        <Badge badgeContent={4} color="error">
         <Mail />
        </Badge>
        <Badge badgeContent={2} color="error">
         <Notifications/>
        </Badge>
        <Avatar sx={{width:30, height:30}} src='https://media.istockphoto.com/id/1281083606/photo/photo-of-attractive-charming-lady-cute-bobbed-hairdo-arms-crossed-self-confident-person.jpg?s=612x612&w=0&k=20&c=Pr3c_KCEQYE7jSDweq-mLbd-WVD-NdNSwzxG82BFwlw='
         onClick={(e) => setOpen(true)}
        />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src='https://media.istockphoto.com/id/1281083606/photo/photo-of-attractive-charming-lady-cute-bobbed-hairdo-arms-crossed-self-confident-person.jpg?s=612x612&w=0&k=20&c=Pr3c_KCEQYE7jSDweq-mLbd-WVD-NdNSwzxG82BFwlw='
        />
        <Typography variant='span'>Ayesha</Typography>
        </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>  
    )
}

export default Navbar
//