
import SignUpForm from '../../components/authentication/sign-up-form.component';
import Button from '../../components/button/button.componenet';
import '../../components/button/button.styles.scss';
import '../login/sign-in.styles.scss';
import SignInForm from '../../components/authentication/sign-in-form.component';
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