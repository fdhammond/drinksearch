import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategory from '../hooks/useCategory';
import useDrinks from '../hooks/useDrinks';

const FormComponent = () => {
    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const [alert, setAlert] = useState('')
    const { category } = useCategory()
    const { getDrinks } = useDrinks();

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(search).includes('')) {
            setAlert('All fields are required')
            return
        }
        setAlert('')
        getDrinks(search)
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >

            {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Drink Name</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="Ex: Tequila, Vodka, etc"
                            name="name"
                            value={search.name}
                            onChange={e => setSearch({
                                ...search,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Drink Category</Form.Label>
                        <Form.Select
                            id="category"
                            name="category"
                            value={search.category}
                            onChange={e => setSearch({
                                ...search,
                                [e.target.name] : e.target.value
                            })}
                        >
                            <option>- Select Category -</option>
                            {
                                category.map(category => (
                                    <option
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >
                        Search Drink
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FormComponent;