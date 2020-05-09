import React from 'react';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import "./Message.css";
import { isEmpty } from "lodash";

export default function Message(props) {

  const formatTime = time => {
    time = moment(time).format("h:mm a");
    return time;
  };
  const showMessage = (message, mClass, type) => {
    if (mClass === "text") {
      if (type === "sent") {
        return (
          <Grid container direction="row" justify="flex-end">
            <Box p={2} style={{ backgroundColor: "#2053a8", color: "#fff", flexGrow: 0, borderRadius: "25px 0 25px 25px", minWidth: "30%" }}>
              <Typography>{message}</Typography>
            </Box>
          </Grid>
        );
      }
      else {
        return (
          <Grid container direction="row" justify="flex-start">
            <Box p={2} style={{ backgroundColor: "#fff", flexGrow: 0, borderRadius: "0 25px 25px 25px", minWidth: "30%" }}>
              <Typography>{message}</Typography>
            </Box>
          </Grid>
        );
      }
    }
    else {
      if (type === "sent") {
        return (
          <Grid container direction="row" justify="flex-end">
            <Box p={2} style={{ backgroundColor: "#2053a8", color: "#fff", flexGrow: 0, borderRadius: "25px 0 25px 25px", minWidth: "30%" }}>
              <Typography variant="body1">Booking Offer Sent for Class: {message.title}</Typography>
              <Typography variant="body1">Price: {message.rate}</Typography>
              <Typography variant="body1">Time: {formatTime(message.classTime)}</Typography>
            </Box>
          </Grid>
        );
      }
      else {
        return (
          <Grid container direction="row" justify="flex-start">
            <Box p={2} style={{ backgroundColor: "#fff", flexGrow: 0, borderRadius: "0 25px 25px 25px", minWidth: "30%" }}>
              <Typography variant="body1"><strong>Class Title: &nbsp;&nbsp;&nbsp; </strong>{message.title}</Typography>
              <Typography variant="body1"><strong>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>{message.rate}</Typography>
              <Typography variant="body1"><strong>Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {formatTime(message.classTime)}</Typography>
              <Box pt={2}>
                <Button fullWidth variant="contained" size="sm"><Link to={`/student/myorder/${message.classId}`}>Book Class</Link></Button>
              </Box>
            </Box>
          </Grid>
        );
      }
    }
  };
  const display = () => {
    console.log(props.data);
    if (isEmpty(props.data) === false) {
      return props.data.map((val, ind) => {
        return (
          <Box mt={2}>
            {showMessage(val.message, val.class, val.type)}
          </Box>
        );
      });
    }
  };


  return (
    <>
      <div key={props.data}>
        {display()}
      </div>
    </>
  );
}
