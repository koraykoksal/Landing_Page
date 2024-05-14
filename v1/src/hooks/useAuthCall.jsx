import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, getAuth } from "firebase/auth";
import { useNavigate ,Navigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import { auth } from "../auth/firebase";
import { fetchFail, fetchLoginSuccess, fetLogOutSuccess, fetchStart } from "../features/authSlice";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";



const useAuthCall = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const login = async (userdata) => {

        dispatch(fetchStart())

        const auth = getAuth()
        signInWithEmailAndPassword(auth, userdata.email, userdata.password)
            .then((userCredential) => {

                const user = userCredential?.user;

                if (user) {
                    dispatch(fetchLoginSuccess(user))
                    navigate("/")
                    toastSuccessNotify("Login Success!");
                }
            })
            .catch((error) => {
                dispatch(fetchFail())
                toastErrorNotify(error.message);
            });

    }

    const logout = async () => {


        signOut(auth);
        dispatch(fetLogOutSuccess())
        navigate("/");
        toastSuccessNotify("LogOut Success!");
    }




    return {
        login,
        logout
    }
}



export default useAuthCall