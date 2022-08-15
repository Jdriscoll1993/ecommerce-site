
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.componenet';
import '../authentication/sign-in-form.styles.scss';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInDefault } from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    //set the object to state
    const [formFields, setFormFields] = useState(defaultFormFields);
    //destructure the fields 
    const { email, password } = formFields;

    const signInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => { //NEED TO ADD FUNCTIONALITY FOR SIGNING IN
        event.preventDefault();
        resetFormFields();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-in-container'>
            <h2>Login</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='text'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email} />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password} />
                <div className='buttons'>
                    <Button type='submit'>submit</Button>
                    <div style={{ padding: '.25em' }}><h2>-or-</h2></div>
                    <Button buttonType='google' onClick={signInGoogleUser}>Sign in with Google</Button>
                </div>

            </form>
        </div>)
}

export default SignInForm;