import React, { useState, useEffect } from 'react';
import { Container,Grow,Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js'; // delete this
import Nav from './components/NavBar'


const App = () =>{
    const [currentId,setCurrentId]=useState(0);
      // delete this
    const dispatch = useDispatch(); // redux hooks
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch])
    return (
      <Container maxidth="lg">
          
          <Nav/>
              <Grow in>
                  <Container>
                      <Grid container justify="space-between" alignItems="strech" spacing={3}>
                          <Grid item xs = {12} sm = {7}>
                            <Posts setCurrentId={setCurrentId} />
                          </Grid>
                          <Grid item xs = {12} sm = {4}>
                              <Form currentId={currentId} setCurrentId={setCurrentId} />
                              </Grid>
                      </Grid>
                  </Container>
              </Grow>

      </Container>
    );
}



export default App;
