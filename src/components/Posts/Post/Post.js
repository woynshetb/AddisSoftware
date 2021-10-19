import React from 'react';
import {CardActions,CardContent,Button,Typography} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useDispatch} from 'react-redux';

import {deletePost} from '../../../actions/posts.js';
import styled from 'styled-components';
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin:10px;
  padding: 10px;
  flex-direction: ${({ layout }) => layout || 'row'};
  
    
    div{
      display: inline;
    }
    height: 100%;
    position: relative;
  & > div {
    flex: 1;
    display: inline;
    
    
    
  }
  
`

const Post = ({post,setCurrentId}) =>{
   
    const dispatch =useDispatch();
    return( 
  <StyledCard >
          
    <div>
    <label>Name</label>
    <Typography variant='h5' color="textSecondary" gutterButton>{post.name}</Typography>
    <label>Salary</label>
    <Typography  variant='h5' color="textSecondary" gutterButton>{post.salary}</Typography>
    <label>Gender</label>
    <Typography variant='h5' color="textSecondary" gutterButton>{post.gender}</Typography>
    <label>Birth date</label>
    <Typography variant='h5' color="textSecondary" gutterButton>{post.birth_date}</Typography>
    
    </div>
    <CardActions>
    <div>
             <Button size="small" color="primary" 
               onClick={() => setCurrentId(post._id)}>
                 <EditIcon fontSize="small" />Edit
               </Button>
              </div> 
     
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
       
    <DeleteIcon fontSize="small" />
      Delete
       
      </Button>
    </CardActions>

        </StyledCard>
    );
}

export default Post;
