import { Form, Button } from "react-bootstrap";

const Login = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}
export default Login