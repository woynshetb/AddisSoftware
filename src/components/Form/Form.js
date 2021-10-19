import React, { useState , useEffect} from 'react';
import {  Typography  } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';


import {createPost,updatePost} from '../../actions/posts.js'
import styled,{createGlobalStyle, css} from 'styled-components';


  const GlobalStyle =createGlobalStyle`
  html{
    height: 100%;
  }
  body{
    font-family: Arial, Helvetica, sans-serif,;
   
   
  }
  `
  const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border: 1px solid #ddd;
  margin:10px 0 20px 0;
  padding :20px;
  box-sizing:border-box;
  
  `;
  const StyledFormWrapper=styled.div`
  
  display: flex;
  justify-content: right;
  
  height: 100vh;
  padding: 0 20px ;
  `
  const StyledForm =styled.form`
  width: 100%;
  height: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing:border-box;
  box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2)
  `
  const StyledInput=styled.input`
  display:block;
  width:100%;
  ${sharedStyles}
  
  `
  const StyledButton=styled.button`
  display: block;
  background-color: brown;
  color:#fff;
  font-size:15px;
  border:0;
  border-radius: 5px;
  height:30px;
  padding: 0 5px;
  cursor: pointer;
  box-sizing: border-box;
  
  `
  

const Form = ({currentId, setCurrentId}) =>{
    const [postData, setPostData] = useState({
        name:'',salary:'',gender:'',birth_date:''
    });
    const post = useSelector((state)=> currentId ? state.posts.find((p) =>p._id === currentId):null);
    
    const dispatch = useDispatch();

    useEffect(() =>{
        if(post) setPostData(post);
    },[post]);

    const handleSubmit =(e) =>{
        // not to get refresh in the browser 
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
            

        }
        else{
            dispatch(createPost(postData));
            
        }
        clear();  
    }
    const clear =() =>{
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    return(
        <>
        <GlobalStyle/>
       <StyledFormWrapper>
      <StyledForm autoComplete ="off" noValidate onSubmit ={handleSubmit}>
          <Typography variant ="h6"> {currentId ? 'Edit' : 'Register'} Employee's Information </Typography>
        <label htmlFor="name">Name</label>
        <StyledInput name = "name" variant = "outlined" label="Name" fullwidth value ={postData.name} onChange={(e)=>setPostData({ ...postData,name:e.target.value})}>
        </StyledInput>
        <label htmlFor="salary">Salary</label>
        <StyledInput name = "salary" variant = "outlined" label="Salary" fullwidth value ={postData.salary} onChange={(e)=>setPostData({ ...postData,salary:e.target.value})}>
        </StyledInput>
        <label htmlFor="gender">Gender</label>
        <StyledInput TextField name = "gender" variant = "outlined" label="Gender" fullwidth value ={postData.gender} onChange={(e)=>setPostData({ ...postData,gender:e.target.value})}>
        </StyledInput>
        <label htmlFor="birthdate">Birthdate</label>
        <StyledInput name = "birth_date" variant = "outlined" label="Birth_Date" fullwidth value ={postData.birth_date} onChange={(e)=>setPostData({ ...postData,birth_date:e.target.value})}>
        </StyledInput>

        <StyledButton variant="container" color="primary" size="large" type="submit" fullwidth>Register</StyledButton>

      </StyledForm>
    </StyledFormWrapper>

       
  </>
    );
}

export default Form;
