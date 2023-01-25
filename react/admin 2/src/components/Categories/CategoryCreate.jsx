import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CategoryCreate({ afterSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const submit = () => {
    axios.post('https://demo-api-one.vercel.app/api/categories', { name, description })
      .then((res) => {
        toast.success('Added successfully');
        afterSubmit(res.data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error('something working wrong')
        if (err.response.data.body === 403 || err.response.data.body === 401) {
          navigate('/signout')
        }

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


