import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";
import clsx from "clsx";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  mainSection: {
    color: "#555",
    marginBottom: "6%"
  },
  heading2: {
    paddingTop: "20px",
    paddingBottom: "10px",
  },
  primaryColor: {
    color: "#555",
    textAlign: "left"
  },

  centermain: {
    display: "flex",
    justifyContent: "flex-start"
  },
  gigSubtitle: {
    marginLeft: "2%"
  },
  avatar: {
    height: 110,
    width: 110
  },

  m: {
    backgroundColor: "blue"
  },
  listGro: {
    width: "100%"
  },
  descriptionSmall: {
    paddingLeft: "5%",
    paddingRight: "5%"
  }
}));

function HowItWorks(props) {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:360px)');

  const display = props.data.map((val, id) => {
    return (
      <Grid className={classes.listItems} item container
        direction="column" justify="center" alignItems="center"
        xs={12} sm={12} md={6} lg={2} xl={2}>
        <Avatar src={val.workPicture} className={classes.avatar} />
        <Typography variant="h6" className={classes.heading2}>
          {val.workTitle}
        </Typography>
        <Typography align="center" className={smallScreen ? classes.descriptionSmall : null} variant="caption">
          {val.workDescription}
        </Typography>
      </Grid>
    );
  });
  return (
    <Grid
      direction="row"
      alignItems="center"
      justify="center"
      item
      xs={12}
      container
      spacing={2}
      className={clsx(classes.mainSection)}
    >
      {display}
    </Grid>


  );
}

export default HowItWorks;
