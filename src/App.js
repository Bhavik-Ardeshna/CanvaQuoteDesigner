
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { Editor } from './Pages/Editor';
import React, { useState } from 'react'

const data = {
  thought: "Today is a wonderful day to have a wonderful day!",
  author: "J. K. Rowling"
}

function App() {


  return (
    <>

      <Switch>
        <Route path='/editor'>
          <Editor thought={data.thought} author={data.author} />
        </Route>
        <Route path='/' >
          <Navbar />
          <Home />
        </Route>

      </Switch>
    </>
  );
}

export default App;
