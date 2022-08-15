
import SignInForm from '../../components/auth-forms/sign-in-form.component';
import SignUpForm from '../../components/auth-forms/sign-up-form.component';
import '../../components/button/button.styles.scss';
import '../authentication/sign-in.styles.scss';

const SignIn = () => {
    return (
        <div className='login-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default SignIn;








    // //sign in with google redirect
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         // if the response is an object generate the user doc ref
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const logGoogleRedirect = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({ user });

    // }