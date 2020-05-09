import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import grey from '@material-ui/core/colors/grey';
import AuthLayout from "./layout/AuthLayout";
import StudentLayout from "./layout/StudentLayout";
import TeacherLayout from "./layout/TeacherLayout";
import AdminLayout from "./layout/AdminLayout";
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './config';
import Privacy from "./views/auth/privacy";
import Terms from "./views/auth/terms";
import AboutUs from "./views/auth/about-us";
import ContactUs from "./views/auth/contact-us";
import NewProfile from "./views/teacher/NewProfile";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#bbdefb",
      main: "#2053a8",
      ultralight: "#e3f2fd",
      dark: "#01579b",
      skin: "#f9f9f9",
      greylight: '#eceff1',
      white: '#fff',
    },
    secondary: grey,
    white: {
      main: '#fff'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      'Poppins',
      'Roboto',
      'sans-serif'
    ].join(",")
  }
});

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "ufessor",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Switch>
          <Route path="/student" render={props => <StudentLayout {...props} />} />
          <Route path="/teacher" render={props => <TeacherLayout {...props} />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/privacy-policy" render={props => <Privacy {...props} />} />
          <Route path="/terms-conditions" render={props => <Terms {...props} />} />
          <Route path="/about-us" render={props => <AboutUs {...props} />} />
          <Route path="/contact-us" render={props => <ContactUs {...props} />} />
          <Route path="/profile" render={props => <NewProfile {...props} />} />
          <Route path="/" render={props => <AuthLayout {...props} />} />
          <Redirect to="/" />
        </Switch>
      </SnackbarProvider>

    </BrowserRouter>
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
