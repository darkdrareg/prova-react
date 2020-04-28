import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './views/Home'
import About from './views/About'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Box bgcolor="gray">
                      <Button variant="contained" color="secondary" href ="/"> Home </Button>
                      <Button variant="contained" color="primary" href="/about"> About </Button>
                    </Box>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

