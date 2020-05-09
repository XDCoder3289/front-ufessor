import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Box, Typography, Divider, Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  subHeading: {
    marginBottom: "1%",
  },
  dividerGrid: {
    paddingTop: '5%',
    paddingBottom: '5%',
  }
}));

export default function ContractScope(props) {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.dark" p={10} pl={0} pr={0}>
      <Container>
        <Grid container direction="row" justify="center" alignItems="center" xs={12}>
          <Grid container justify="center" xs={12} sm={12} md={4} lg={4} xl={4} style={{ paddingBottom: "30px" }}>
            <Box color="white.main">
              <Typography variant="h5">What Ufessor Offers</Typography>
            </Box>
          </Grid>
          <Grid container xs={10} sm={10} md={8} lg={8} xl={8} >
            <Box bgcolor="white.main">
              <Grid container direction="row" xs={12} sm={12}>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Box p={5}>
                    <Hidden only="xs"><Box bgcolor="primary.light" p={0.5} mb={1} style={{ width: '15%' }}></Box></Hidden>
                    <Hidden smUp><Box bgcolor="primary.light" p={0.5} mb={1} style={{ width: '45%' }}></Box></Hidden>
                    <Typography className={classes.subHeading} variant="subtitle2"> Qualified Teachers</Typography>
                    <Typography variant="body2">
                      The teachers on the platform are qualified and approved manually. Not anyone can register.
                </Typography>
                  </Box>
                </Grid>
                <Grid container xs={12} sm={12} md={1} lg={1} xl={1} className={classes.dividerGrid} justify="center" alignItems="center">
                  <Hidden only="sm xs"><Divider style={{ width: '2%' }} orientation="vertical" /></Hidden>
                  <Hidden mdUp><Divider style={{ width: '100%' }} orientation="horizontal" /></Hidden>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Box p={5}>
                    <Hidden only="xs"><Box bgcolor="primary.light" p={0.5} mb={1} style={{ width: '15%' }}></Box></Hidden>
                    <Hidden smUp><Box bgcolor="primary.light" p={0.5} mb={1} style={{ width: '45%' }}></Box></Hidden>
                    <Typography className={classes.subHeading} variant="subtitle2"> Virtual Classrooms</Typography>
                    <Typography variant="body2">
                      Get life-like experience in a virtual classroom with limited students and live interaction.
                </Typography>
                  </Box>
                </Grid>
                <Grid container xs={12} sm={12} md={1} lg={1} xl={1} className={classes.dividerGrid} justify="center" alignItems="center">
                  <Hidden only="sm xs"><Divider style={{ width: '2%' }} orientation="vertical" /></Hidden>
                  <Hidden mdUp><Divider style={{ width: '100%' }} orientation="horizontal" /></Hidden>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Box p={5}>
                    <Hidden only="xs"><Box bgcolor="primary.light" p={0.5} mb={1} style={{ width: '15%' }}></Box></Hidden>
                    <Hidden smUp><Box bgcolor="primary.light" p={0.5} mb={1} style={{ width: '45%' }}></Box></Hidden>
                    <Typography className={classes.subHeading} variant="subtitle2">Productivity</Typography>
                    <Typography variant="body2">
                      You don't have to travel to those expensive tuition centres anymore. Study from as qualified teachers as any tuition centre offers.
                </Typography>
                  </Box>
                </Grid>
                <Grid container xs={1} justify="flex-end">
                  <Box bgcolor="" style={{ width: '100%' }}>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
