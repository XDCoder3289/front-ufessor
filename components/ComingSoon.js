import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mybody: {
    textAlign: 'center',
    padding: '150px',
  },
  heading: {
    fontSize: '50px',
  },
  myarticle: {
    display: 'block',
    textAlign: 'left',
    width: '650px',
    margin: '0 auto',
  }
}));

export default function ComingSoon(props) {
  const classes = useStyles();

  return (
    <div className={classes.mybody}>
      <article className={classes.myarticle}>
        <h1 className={classes.heading}>We&rsquo;ll be back soon!</h1>
        <div>
          <p>Sorry for the inconvenience but we&rsquo;re developing this page at the moment. we&rsquo;ll be back online shortly!</p>
          <p>&mdash; The Team</p>
        </div>
      </article>
    </div>
  );
}
