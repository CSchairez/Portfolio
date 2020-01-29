import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  
    return (
      <div className="title "> 
      <Layout>
          <Header className="header-color" title="title" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Portfolio" style={{color:'black'}}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
      </Layout>
  </div>
    );
  
}
export default App;
