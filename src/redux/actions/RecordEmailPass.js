import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { loginSyncrono } from "./loginAsynSyn"

export const registerEmailPass = (userName, email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: userName })
                dispatch(loginSyncrono(user.uid, user.displayName))
            })
            .catch(e => console.log(e))
    }
}