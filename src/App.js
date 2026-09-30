import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        {/* <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/auth" exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;