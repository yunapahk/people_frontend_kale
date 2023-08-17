import { Form } from 'react-router-dom';

function Login(props){
    return <div>
        <h1>Login Form</h1>
        <Form action="/login" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
            <button type="submit">Login</button>
        </Form>
        </div>
}

export default Login;