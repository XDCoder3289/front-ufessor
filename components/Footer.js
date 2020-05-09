import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import { Grid, Box, Divider, Typography, Link } from "@material-ui/core";
import { Facebook, Instagram, YouTube, Twitter } from '@material-ui/icons';
import { Auth } from "aws-amplify";


const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    marginBottom: "0"
  },
  divider: {
    backgroundColor: "white",
    marginTop: "10px",
    marginBottom: "10px",
  },
  textStyle: {
    color: "white",
  }

}));
function Footer(props) {
  const classes = useStyles();
  const [type, setType] = useState('');
  const [redirect, setRedirect] = useState(false);

  const goTo = async type => {
    try {
      let result = await Auth.currentAuthenticatedUser({ bypassCache: false });
      console.log(result);
      if (result.attributes["custom:role"] === "student") {
        setType(type);
        setRedirect(true);
      }
      else {

      }
    }
    catch (e) {
      console.log(e);
      setType("signup");
      setRedirect(true);
    }
  };
  const showRedirect = () => {
    if (redirect) {
      if (type === "signup") {
        window.location.href = "/student/signup";
      }
      else {
        return <Redirect to={`/student/search/${type}@`} />
      }
    }
  }
  const preventDefault = event => event.preventDefault();
  return (
    <div >
      {showRedirect()}
      <Box bgcolor="primary.dark" className={classes.root}>
        <Grid className={classes.textStyle} item xs={12} >
          &copy; 2019 Ufessor Inc.
          </Grid>
        <Divider variant="middle" className={classes.divider} />
        <Grid container item xs={12} direction="row">
          <Grid container xs={12} sm={4} md={4} lg={4} xl={4} item direction="column" justify="center" alignItems="center">
            <Typography className={classes.textStyle} bgcolor="white.main" variant="body1" style={{ marginTop: "5%", marginBottom: "5%" }}>Class Category</Typography>
            <Link className={classes.textStyle} onClick={() => goTo("Nine")} color="inherit" style={{ marginBottom: "2%" }}>Nine</Link>
            <Link className={classes.textStyle} onClick={() => goTo("Matric")} color="inherit" style={{ marginBottom: "2%" }}>Matric</Link>
            <Link className={classes.textStyle} onClick={() => { goTo("O Level") }} color="inherit" style={{ marginBottom: "2%" }}>O Level</Link>
            <Link className={classes.textStyle} onClick={() => { goTo("A Level") }} color="inherit" style={{ marginBottom: "2%" }}>A Level/Fsc</Link>
          </Grid>
          <Grid container xs={12} sm={4} md={4} lg={4} xl={4} item direction="column" justify="center" alignItems="center">
            <Typography className={classes.textStyle} variant="body1" style={{ marginTop: "5%", marginBottom: "5%" }}>Company</Typography>
            <Link className={classes.textStyle} href="/about-us" color="inherit" style={{ marginBottom: "2%" }}>About Us</Link>
            <Link className={classes.textStyle} href="/terms-conditions" color="inherit" style={{ marginBottom: "2%" }}>Terms of Service</Link>
            <Link className={classes.textStyle} href="/privacy-policy" color="inherit" style={{ marginBottom: "2%" }}>Privacy Policy</Link>
          </Grid>
          <Grid container xs={12} sm={4} md={4} lg={4} xl={4} item direction="column" justify="center" alignItems="center" >
            <Typography className={classes.textStyle} variant="body1" style={{ marginTop: "5%", marginBottom: "5%" }}>Follow Us</Typography>

            <a className={classes.textStyle} rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ufessor" color="inherit" style={{ marginBottom: "1%" }}><Facebook /></a>
            <a className={classes.textStyle} rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/_ufessor" color="inherit" style={{ marginBottom: "1%" }}><Instagram /></a>
            <a className={classes.textStyle} rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/ufessor" color="inherit" style={{ marginBottom: "1%" }}><Twitter /></a>
            <a className={classes.textStyle} rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCKrulibGROjlXjVciTFlY2Q?" color="inherit" style={{ paddingBottom: "1%" }}><YouTube /></a>


          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
