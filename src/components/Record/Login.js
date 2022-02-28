import Button from 'react-bootstrap/Button'
import React from 'react'
import Form from 'react-bootstrap/Form'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { loginFacebook, loginGoogle } from '../../redux/actions/loginAsynSyn'

const Login = () => {

    const [values, handleInputChange] = useForm({
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    const { email, password } = values

    const IniciarSesion = (e) => {
        e.preventDefault()
        alert('Funciona')
    }

    // const loginGoogle = () => {

    // }

    return (
        <div>
            <form onSubmit={IniciarSesion} className="formLogin">
                <div>
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary" type='submit'>Iniciar Sesion</Button>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="outline-primary"
                        onClick={() => {
                            dispatch(loginGoogle())
                        }}
                    >Google</Button>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary"
                        onClick={() => {
                            dispatch(loginFacebook())
                        }}
                    >Facebook</Button>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="light">Registrarse</Button>
                </div>
            </form>
        </div>
    )
}

export default Login