import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
    const handleSubmit = (event) => {

    };
    return (
        <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
        >

            <h2>Contact</h2>
            <Row>
                <Col>
                <div className="contact-form">
                    <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3" controlId="ValidationCustom01">
                        <FormLabel>Name</FormLabel>
                        <FormControl required type="text" placeholder="Name"/>
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="ValidationCustom02">
                        <FormLabel>Email</FormLabel>
                        <FormControl required type="email" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="ValidationCustom03">
                        <FormLabel>Message</FormLabel>
                        <FormControl required as="textarea" placeholder="Message"/>
                    </FormGroup>
                    <Button type="submit">Submit Form</Button>
                    </Form>
                </div>
                </Col>
                <Col>
                <div className="contact-data">
                    <p>send text to this lorem dolor</p>
                    <p>
                        <ListGroup horizontal>
                            <ListGroupItem></ListGroupItem><a href="">Youtube</a>
                            <ListGroupItem></ListGroupItem><a href="">Youtube</a>
                            <ListGroupItem></ListGroupItem><a href="">Youtube</a>
                            <ListGroupItem></ListGroupItem><a href="">Youtube</a>
                        </ListGroup>
                    </p>
                </div>
                </Col>
            </Row>
        </motion.div>
    );
};

export default Contact;