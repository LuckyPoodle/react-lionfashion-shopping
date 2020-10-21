import React ,{useState}from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/fire.util';


const SignIn =()=>{
   
    const [userCredentials,setCredentials]=useState({email:'',password:''})


  
    const handleSubmit = async event => {
      event.preventDefault();

      const {email, password}=userCredentials;

      try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({ email: '', password: '' });
      }catch (error){
        console.log("sign in "+error.message);
      }
  
     
    };
  
    const handleChange = event => {
      
      const { value, name } = event.target;
  
      setCredentials({ ...userCredentials,[name]: value });
    };

    const {email,password}=userCredentials;
  
    
    
      return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='password'
              required
            />


            <div className='buttons'>

            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>           
              Sign In with Google    </CustomButton>


            </div>
         
       
        
              
      
           
          </form>
        </div>
      );
    
  }
  
  export default SignIn;