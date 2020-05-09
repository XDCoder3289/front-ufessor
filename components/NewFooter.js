import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box, Grid, Typography, Link } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import BlueLogo from "../assets/img/blueLogo.png";
import { makeStyles } from '@material-ui/core/styles';
import { Auth } from "aws-amplify";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
  },
  navMenuLinks: {
    color: "#fff",
  },
  myAccountLinks: {
    color: "#555"
  },
  categoryLink: {
    cursor: "pointer"
  },
  footerSubContainers: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }
}));

export default function NewFooter(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  const authgoTo = async type => {
    try {
      let result = await Auth.currentAuthenticatedUser({ bypassCache: false });
      console.log(result);
      if (result.attributes["custom:role"] === "student") {
        window.location.href = `/student/search/${type}@`;
      }
      else {
        window.location.href = "/student/signup";
      }
    }
    catch (e) {
      console.log(e);
      window.location.href = "/student/signup";
    }
  };
  return (
    <>
      {/*FOOTER UFESSOR*/}
      <Box pt={10} pb={10} bgcolor="#efefef">
        <Grid container direction={isMobile ? "column" : "row"} alignItems={isMobile ? "center" : null} justify={isMobile ? null : "space-around"}>
          <Box className={classes.footerSubContainers} mb={isMobile ? 5 : 0}>
            <img src={BlueLogo} alt="ufessor logo" />
            <Box mt={2} mb={1}><Typography variant="body1" color="textSecondary"> ufessorpk@gmail.com</Typography></Box>
            <Typography variant="body1">0308-5000123</Typography>
          </Box>
          <Box className={classes.footerSubContainers} mb={isMobile ? 5 : 0}>
            <Typography variant="h6">Class Category</Typography>
            <Box className={classes.footerSubContainers} mt={2}>
              <Link onClick={() => authgoTo("Nine")} className={classes.categoryLink} color="inherit"><Typography variant="body1" color="textSecondary">Nine</Typography></Link>
              <Box mt={1} mb={1}> <Link onClick={() => authgoTo("Matric")} className={classes.categoryLink} color="inherit"><Typography variant="body1" color="textSecondary">Matric</Typography></Link></Box>
              <Box mb={1}> <Link onClick={() => authgoTo("O Level")} className={classes.categoryLink} color="inherit"><Typography variant="body1" color="textSecondary">O-Levels</Typography></Link></Box>
              <Box> <Link onClick={() => authgoTo("A Level")} className={classes.categoryLink} color="inherit"><Typography variant="body1" color="textSecondary">A-Levels/Fsc</Typography></Link></Box>
            </Box>
          </Box>
          <Box mb={isMobile ? 5 : 0} className={classes.footerSubContainers} >
            <Typography variant="h6">About Us</Typography>
            <Box className={classes.footerSubContainers} mt={2}>
              <Link className={clsx(classes.linkStyle, classes.myAccountLinks)} href="/about-us"><Typography variant="body1" color="textSecondary">About Us</Typography></Link>
              <Box mt={1} mb={1}><Link className={clsx(classes.linkStyle, classes.myAccountLinks)} href="/terms-conditions"><Typography variant="body1" color="textSecondary">Terms of Service</Typography></Link></Box>
              <Box ><Link className={clsx(classes.linkStyle, classes.myAccountLinks)} href="/privacy-policy"><Typography variant="body1" color="textSecondary">Privacy Policy</Typography></Link></Box>
            </Box>
          </Box>
          <Box className={classes.footerSubContainers} >
            <Typography variant="h6">Follow Us</Typography>
            <Box mt={2} mb={2}>
            </Box>
            <Grid className={classes.footerSubContainers} container direction="row">
              <Box><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ufessor" color="inherit"><Facebook /></a></Box>
              <Box pl={isMobile ? 0 : 2}><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/_ufessor" color="inherit"><Instagram /></a></Box>
              <Box pl={isMobile ? 0 : 2}><a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/ufessor" color="inherit"><Twitter /></a></Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
