
import { useState  } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.componenet';
import {
    signInWithGooglePopup,
    signInAuthUsersWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import '../auth-forms/sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

//TODO - FORGOT PASSWORD AND EMAIL RESET LINK

const SignInForm = () => {

    //set the object to state
    const [formFields, setFormFields] = useState(defaultFormFields);
    //destructure the fields 
    const { email, password } = formFields;


    const signInGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUsersWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    alert('Specified email is invalid. Please try again.');
                    break;
                case 'auth/user-not-found':
                    alert('No user assocaited with this email.');
                    break
                case 'auth/wrong-password':
                    alert('Specified password is invalid. Please try again.');
                    break;
                default:
                    console.log(error);
            }
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
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
                    <Button type='button' buttonType='google' onClick={signInGoogleUser}>Google Sign In</Button>
                </div>

            </form>
        </div>)
}

export default SignInForm;