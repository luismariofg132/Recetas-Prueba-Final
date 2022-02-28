import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { registerEmailPass } from '../../redux/actions/RecordEmailPass'

const Record = () => {
    const [values, handleInputChange] = useForm({
        email: "",
        password: "",
        name: ""
    })
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { email, password, name } = values

    const IniciarSesion = (e) => {
        e.preventDefault()
        dispatch(registerEmailPass(name, email, password))
    }

    return (
        <div>
            <form className='formLogin' onSubmit={IniciarSesion}>
                <div>
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
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
                    <Button variant="primary" type='submit'>Crear Cuenta</Button>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="light"
                        onClick={() => {
                            Navigate('/login')
                        }}
                    >Volver al Login</Button>
                </div>
            </form>
        </div>
    )
}

export default Record