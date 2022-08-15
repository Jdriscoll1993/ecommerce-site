
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.componenet';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUsersWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import '../auth-forms/sign-in-form.styles.scss';

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
        await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => { //NEED TO ADD FUNCTIONALITY FOR SIGNING IN
        event.preventDefault();

        try {
            const response = await signInAuthUsersWithEmailAndPassword(email,password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            alert('invalid email or password');
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
                    <Button buttonType='google' onClick={signInGoogleUser}>Google Sign In</Button>
                </div>

            </form>
        </div>)
}

export default SignInForm;