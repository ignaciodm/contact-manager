import React from "react";
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/List';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';


function Sidebar(props) {
  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
          paper: classes.drawerPaper
        }}
    >
      <div className={classes.toolbar} />

      <Button variant="contained" color="secondary" className={classes.button}>
        Add Contact
      </Button>

      <Divider/>
      <List>
        <ListItem>
          <IconButton aria-label="Person">
            <PersonIcon />
          </IconButton>
          <a href="#">All Contacts</a>
        </ListItem>

      </List>

    </Drawer>
  );
}

export default Sidebar;