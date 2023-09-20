import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import Receipt from '@mui/icons-material/ReceiptLong';
import Edit from '@mui/icons-material/Edit';
import Block from '@mui/icons-material/Block';
import {Link} from 'react-router-dom';
export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#fff0eb'}}>
      <nav aria-label="main mailbox folders">
        <List sx={{fontColor:'black'}}>
         <Link to="/adduser"> <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Add User" />
            </ListItemButton>
          </ListItem></Link>
          <Link to="/deleteuser"> <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Delete />
              </ListItemIcon>
              <ListItemText primary="Delete Account" />
            </ListItemButton>
          </ListItem></Link>
         <Link to="/admintransactions"><ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText primary="View Transactions" />
            </ListItemButton>
          </ListItem></Link>
          <Link to="/disable"><ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Block />
              </ListItemIcon>
              <ListItemText primary="Disable Account" />
            </ListItemButton>
          </ListItem></Link>
          <Link to="/editaccount">  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText primary="Edit Account" />
            </ListItemButton>
          </ListItem></Link>
        </List>
      </nav>
      </Box>
  );
}
