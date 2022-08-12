
import { signInWithGooglePopup, createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import Button from '../../components/button/button.componenet';
import '../../components/button/button.styles.scss';
const SignIn = () => {
    const signInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <div>
                <div>
                    <h2>Sign In</h2>
                    <Button buttonType='google' onClick={signInGoogleUser}>
                        Sign in with Google
                    </Button>
                </div>
                <SignUpForm />
            </div>
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