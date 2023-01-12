import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function PostCreate() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="form.name">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="name of the article" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type='submit'>
                Submit
            </Button>
        </Form>
    )
}