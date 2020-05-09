import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardMedia, CardActions, CardActionArea, Typography, Link, Button } from "@material-ui/core";
import { Auth } from "aws-amplify";

import clsx from "clsx";
const useStyles = makeStyles(theme => ({
  mainSection: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",

  },
  listItems: {
    display: "flex",
    marginRight: "2%",
    marginBottom: "2%",

  },
  primaryColor: {
    color: "#555",
    textAlign: "left"
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 0,
    marginTop: "5%"
  },
  centermain: {
    display: "flex",
    justifyContent: "flex-start"
  },
  gigSubtitle: {
    marginLeft: "2%"
  },
  m: {
    backgroundColor: "blue"
  },
  listGro: {
    width: "100%"
  },
  media: {
    width: "57%",
    height: "57%",
  }
}));

function ClassesCategory(props) {
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
        return <Redirect push to={`/student/search/${type}@`} />
      }
    }
  }
  const display = props.data.map((val, id) => {
    return (
      <Grid className={classes.listItems} item xs={6} sm={6} md={2} lg={2} xl={2}>
        <Card className={classes.card}>
          <Button onClick={() => goTo(val.type)}>
            <CardActionArea>
              <Grid container justify="center" alignItems="center">
                <CardMedia
                  component="img"
                  height="120"
                  style={{ backgroundSize: "contain" }}
                  image={val.classPicture}
                  title="Paella dish"
                />
              </Grid>
              <CardActions >
                <Grid
                  item
                  xs={12}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={classes.mainSection}
                >

                  <Grid
                    item
                    xs={12}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={clsx(classes.mainSection)}
                  >
                    <Typography
                      className={classes.price}
                      variant="h6"
                      component="p"
                      style={{ color: "#555" }}
                    >
                      {val.classDescription}
                    </Typography>

                  </Grid>
                </Grid>
              </CardActions>
            </CardActionArea>
          </Button>
        </Card>
      </Grid>
    );
  });
  return (
    <>
      {showRedirect()}
      <Grid container
        direction="row"
        alignItems="center"
        justify="center"
        item
        xs={12}
        className={clsx(classes.mainSection, classes.list)}
      >

        {display}


      </Grid>

    </>
  );
}

export default ClassesCategory;
