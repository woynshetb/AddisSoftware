import React from 'react';
// for the grid
import {Grid,CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js'

const Posts = ({setCurrentId}) =>{
    const posts = useSelector((state)=>state.posts);
    
    console.log(posts);
    return(
        // if there is nothing inside the list(employee) sow circularprogress else make a grid to show or to list
      !posts.length ? <CircularProgress/> : (
          <Grid container alignItems="strech" spacing={3}>
              {
                  posts.map((post)=>(
                      <Grid key={post._id} item xs={12} sm={6}>
                          <Post post={post} setCurrentId={setCurrentId} />
                      </Grid>
                  ))
              }
          </Grid>
      )
    );
}

export default Posts;
