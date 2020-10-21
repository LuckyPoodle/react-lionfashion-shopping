import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/fire.util';


import './sign-up.styles.scss';

const SignUp = () => {

  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });



  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log("sign up error :" + error.message);


    }
  };

 const  handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }




  const { displayName, email, password, confirmPassword } = userCredentials;
  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Sign Up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          handleChange={handleChange}
          value={displayName}
          label='Display Name'
          required
        />

        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
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

        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm password'
          required
        />

        <div className='buttons'>

          <CustomButton type='submit'>Sign Up</CustomButton>


        </div>






      </form>
    </div>
  )

}

export default SignUp;