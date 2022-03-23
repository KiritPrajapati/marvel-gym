import '../App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form,Button,Container } from 'react-bootstrap';
import {app, database} from '../firebaseConfig';
import { getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAdditionalUserInfo} from 'firebase/auth';

const Login = ()=> {
  const [data,setData] = useState({
    email: '',
    password: ''

  })
  const auth = getAuth();
  const handleInputs = (event) => {
  let inputs = {[event.target.name] : event.target.value}

  setData({ ...data, ...inputs})
  }
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
   
      // console.log(response.user)
      history.push("/view");
      
    })
    .catch((err) => {
       alert("Id or Password is Wrong")
    })
  }

  let history = useHistory();


  return (
    

<Container className='p-5' >
<Form  >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><b>Email address</b></Form.Label>
    <Form.Control className="input"  name="email" type="email" placeholder="Enter email" onChange={event => handleInputs(event)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>Password</b></Form.Label>
    <Form.Control className="input" name="password" type="password" placeholder="Password" onChange={event => handleInputs(event)} />
  </Form.Group>
  <Button variant="warning"  onClick={handleSubmit}>
    Sign In
  </Button>
</Form>
</Container>

   
  );
}

export default Login;
