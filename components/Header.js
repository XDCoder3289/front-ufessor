import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from "@material-ui/core";
import logo from "../uu.png";
const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#2196f3',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  menu: {
    zIndex: 1,
  }
}));

function Header(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ backgroundColor: '#fff', zIndex: "0" }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/">
              <img src={logo} height="40" width="120" alt="logo" />
            </Link>
          </Typography>

          <Button ref={anchorRef} aria-controls="menu-list-grow" aria-haspopup="true" onClick={handleToggle} color="primary">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.proot}>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper style={{ zIndex: "2" }} id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    onKeyDown={handleListKeyDown}
                    className={classes.menu}
                  >
                    <MenuItem onClick={handleClose}><Link to="/teacher/login/">Teacher Login</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/student/login/">Student Login</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      {/* <Login open={open} closeLogin={closeLogin} />*/}
    </div>
  );
}

export default Header;
