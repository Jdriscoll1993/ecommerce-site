
import SignInForm from '../../components/auth-forms/sign-in-form.component';
import SignUpForm from '../../components/auth-forms/sign-up-form.component';
import '../../components/button/button.styles.scss';
import '../authentication/authentication.styles.scss';

const SignIn = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default SignIn;