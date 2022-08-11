
import { signInWithGooglePopup, createUserDocumentFromAuth, } from '../../utils/firebase/firebase.utils';

const Auth = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

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
    //sign in with google popup


    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
        </div>
    )
}
export default Auth;