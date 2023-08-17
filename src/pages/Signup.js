import { Form } from 'react-router-dom';


function Signup(props){
    return <div>
        <h3>Signup Form</h3>
        <Form action="/signup" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
            <button type="submit">Signup</button>
        </Form>
        </div>
}

export default Signup;