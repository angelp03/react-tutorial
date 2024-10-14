import { useAuthState, signInWithGoogle, signOut } from "../utilities/firebase";
import "./Banner.css"
const Banner = ({title}) => {
    const [user] = useAuthState();
    return (
        <div className="banner-div">
            <h1> 
                {title ? title: "CS Courses for 2018-2019"} 
            </h1>
            { user ? 
            <button onClick={signOut}>
                Sign Out
            </button>:
            <button onClick={signInWithGoogle}>
                Sign In
            </button>}
        </div>
    );
};

export default Banner