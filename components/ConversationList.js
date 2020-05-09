import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { isEmpty } from "lodash";
import ListItem from '@material-ui/core/ListItem';
import { Grid, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mybody: {
    padding: "10px",
  },
  conversationPhoto: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "15px",
  },
}));

export default function (props) {
  const formatName = (name, id) => {
    if (id === props.selected) {
      return (<Box p={4} bgcolor="#2053a8" color="#fff" style={{ width: "100%" }}><Typography><strong>{name}</strong></Typography></Box>);
    }
    else {
      return (<Box p={4}><Typography>{name}</Typography></Box>);
    }
  }
  const display = () => {
    console.log(props.data);
    if (isEmpty(props.data)) {
      return (
        <Box ml={4}>
          <Typography variant={"body1"}>No Messages Available</Typography>
        </Box>
      );
    }
    else {
      return props.data.map((val, id) => {
        return (
          <ListItem key={id} onClick={() => props.setSelect(id)} button>
            {/*<Avatar src={val.avatar} className={classes.conversationPhoto} alt="conversation" />*/}
            <Grid item container alignItems="center" justify="space-between">
              {formatName(val.friendProfile.name, id)}
              <Typography variant="caption" style={{ paddingLeft: "5px" }}>{""}</Typography>
            </Grid>
          </ListItem>
        );
      });
    }
  }
  return (
    <Box >
      {display()}
    </Box>
  );
}
