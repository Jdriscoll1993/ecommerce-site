import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import '../form-input/form-input.styles.scss';
import './sign-up-form.styles.scss';
import Button from '../button/button.componenet';
import '../button/button.styles.scss';

//initialize object for sign in fields
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    //set the fields object to state
    const [formFields, setFormFields] = useState(defaultFormFields);
    //destructure the fields 
    const { displayName, email, password, confirmPassword } = formFields;

    //hooking into context causes react to rerun function 
    //not rerender unless jsx changes based on upated values 
    //COULD BE A PERFORMANCE PROBLEM WITH MANY COMPONENTS HOOKED INTO A SINGLE CONTEXT
    // const val = useContext(UserContext); 

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    //async submit function to create user 
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        else if (password.length < 6) {
            alert('password should be at least 6 characters');
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use');
            }
            else {
                console.log('error creating user', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up</span>
            <form onSubmit={handleSubmit}>
                {/* may consider being more explicit in a team setting 
                by passing object with input values as inputOptions shown below. Pass props into form-input */}

                {/* <FormInput
                    label='Display Name'
                    inputOptions={{
                        type: 'text',
                        required: true,
                        onChange: { handleChange },
                        name: 'displayName',
                        value: { displayName }
                    }}
                /> */}

                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName} />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword} />
                <Button type='submit'>submit</Button>
            </form>
        </div>)
}

export default SignUpForm;