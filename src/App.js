import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import green from '@material-ui/core/colors/green';
// Components
import NavBar from './components/Navbar';

// pages 
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: 'fff'
    }
  }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <Router>
          <NavBar />
          <div className="container">
            <Switch>
              {/* api */}
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
            </div>
        </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
