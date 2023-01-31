import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function CategoryEdit({ afterEdit, category }) {
    const [name, setName] = useState(category?.name);
    const [description, setDescription] = useState('')
    const submit = () => {
        axios.put(`http://localhost:8000/categories/:id` + category.id, { name })
            .then((res) => {
                toast.success('Edited successfully');
                afterEdit(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error('something working wrong')
            })
    };

    return (
        <Form onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => { setName(e.target.value); }} type="text" placeholder="Name of the Category..." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={(e) => { setDescription(e.target.value) }} as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}


