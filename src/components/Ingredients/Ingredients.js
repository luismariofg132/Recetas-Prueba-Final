import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { AddIngredientAsyn, deleteIngredientAsyn, editIngredientAsyn, listIngredientAsyn } from '../../redux/actions/IngredientsActions'
import { useNavigate } from 'react-router-dom'

const Ingredients = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(function list() {
        dispatch(listIngredientAsyn())
    }, [dispatch])

    const { ingredient } = useSelector(store => store.ingredient)

    const [values, handleInputChange, reset, setValues] = useForm({
        product: "",
        brand: "",
        items: "",
        quantity: "",
        price: "",
        id: ""
    })

    const { product, brand, items, quantity, price, id } = values

    const nuevoIngredient = (e) => {
        e.preventDefault()
        const ingredient = {
            product, brand, items, quantity, price
        }
        dispatch(AddIngredientAsyn(ingredient))
        setShow(false)
        reset()
    }

    const editIngredient = (e) => {
        e.preventDefault()
        const ingredient = {
            product, brand, items, quantity, price
        }
        dispatch(editIngredientAsyn(id, ingredient))
        setShow2(false)
        reset()
    }

    return (
        <div>
            <div className='tableIngredients'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Brand</th>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ingredient?.map((ing, index) => (
                                <tr key={index}>
                                    <td>{ing.product}</td>
                                    <td>{ing.brand}</td>
                                    <td>{ing.items}</td>
                                    <td>{ing.quantity}</td>
                                    <td>{ing.price}</td>
                                    <td>
                                        <Button variant="dark" onClick={() => {
                                            setShow2(true)
                                            setValues({
                                                product: ing.product,
                                                brand: ing.brand,
                                                items: ing.items,
                                                quantity: ing.quantity,
                                                price: ing.price,
                                                id: ing.id
                                            })
                                        }}
                                        >Edit</Button>
                                        <Button variant="dark"
                                            onClick={() => {
                                                dispatch(deleteIngredientAsyn(ing.id))
                                            }}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <div className="d-grid gap-2">
                    <Button variant="dark" onClick={() => setShow(true)}>Agregar Nuevo Ingrediente</Button>
                </div>
                <div className="d-grid gap-2 mt-2">
                    <Button variant="dark" onClick={() => Navigate('/')}>Volver a Comprar</Button>
                </div>
            </div>
            <div>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Agregar Nuevo Ingrediente
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={nuevoIngredient}>
                            <div>
                                <Form.Label>Product</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='product'
                                    onChange={handleInputChange}
                                    value={product}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='brand'
                                    onChange={handleInputChange}
                                    value={brand}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Items</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='items'
                                    onChange={handleInputChange}
                                    value={items}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='quantity'
                                    onChange={handleInputChange}
                                    value={quantity}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='price'
                                    onChange={handleInputChange}
                                    value={price}
                                    required
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <Button variant="dark" type='submit'>Agregar</Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
            <div>
                <Modal
                    show={show2}
                    onHide={() => {
                        setShow2(false)
                        reset()
                    }}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Editar Ingrediente
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={editIngredient}>
                            <div>
                                <Form.Label>Product</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='product'
                                    onChange={handleInputChange}
                                    value={product}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='brand'
                                    onChange={handleInputChange}
                                    value={brand}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Items</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='items'
                                    onChange={handleInputChange}
                                    value={items}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='quantity'
                                    onChange={handleInputChange}
                                    value={quantity}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='price'
                                    onChange={handleInputChange}
                                    value={price}
                                    required
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <Button variant="dark" type='submit'>Editar</Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Ingredients