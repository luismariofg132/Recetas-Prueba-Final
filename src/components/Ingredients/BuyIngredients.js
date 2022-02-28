import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listIngredientAsyn } from '../../redux/actions/IngredientsActions'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const BuyIngredients = () => {

    const [total, settotal] = useState(0)
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(function list() {
        dispatch(listIngredientAsyn())
    }, [dispatch])

    const { ingredient } = useSelector(store => store.ingredient)

    const checked = ({ target }) => {
        const checked = target.checked
        const price = target.value
        if (checked) {
            if (total >= 0) {
                settotal(total + Number(price))
            }
        }
        else {
            settotal(total - Number(price))
        }
    }

    const SeleccionarTodo = () => {
        const checbox = document.getElementsByName('checbox')
        for (let i = 0, n = checbox.length; i < n; i++) {
            checbox[i].checked = checked;
        }
        const totalPay = ingredient.reduce((sum, value) => (typeof Number(value.price) == "number" ? sum + Number(value.price) : sum), 0)
        settotal(totalPay)
    }

    const deseleccionarTodo = () => {
        const checbox = document.getElementsByName('checbox')
        for (let i = 0, n = checbox.length; i < n; i++) {
            checbox[i].checked = !checked;
        }
        settotal(0)
    }

    const pagoProducts = () => {
        Swal.fire(
            'Gracias por comprar',
            'Te esperamos para otra compra',
            'success'
        )
        deseleccionarTodo()
    }

    return (
        <div>
            <div className='ingredientCont'>
                <div>
                    <span>Ingredientes</span>
                    <h4>Risotto de setas (vegano)</h4>
                </div>
                <Button variant="link"
                    onClick={() => SeleccionarTodo()}
                >Seleccionar Todo</Button>
                <Button variant="link"
                    onClick={() => deseleccionarTodo()}
                >Deseleccionar Todo</Button>
                <hr />
                {
                    ingredient?.map((ing, index) => (
                        <div key={index}>
                            <div className='ingredient'>
                                <div>
                                    <input type="checkbox" name="checbox"
                                        onClick={checked}
                                        value={ing.price}
                                    />
                                    <h5>{ing.produc}</h5>
                                    <span>{ing.brand}</span>
                                    <span>{ing.quantity}</span>
                                </div>
                                <div>
                                    <h4 className='price'>$ {ing.price}</h4>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                }
                <div className="d-grid gap-2">
                    <Button variant="success"
                        onClick={() => pagoProducts()}
                    >Pagar $ {total}</Button>
                </div>
                <div className='d-grid gap-2 mt-3'>
                    <Button variant="outline-dark"
                        onClick={() => { Navigate('/ingredients') }}
                    >Editar Ingredientes</Button>
                </div>
            </div>
        </div>
    )
}

export default BuyIngredients