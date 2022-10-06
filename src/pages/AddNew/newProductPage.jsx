import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { ProductForm, Form } from '../../components/Form'

export const AddProduct = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ProductForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form />
                </Col>
            </Row>
        </Container>
    )
}