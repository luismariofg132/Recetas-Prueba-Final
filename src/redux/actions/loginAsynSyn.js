import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { google } from '../../firebase/firebaseConfig'
import { types } from '../types/types'

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSyncrono(user.uid, user.displayName))
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                console.log(user)
            })
    }
}

export const loginSyncrono = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}