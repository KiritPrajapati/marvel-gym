import '../App.css';
import View from './View';
import { useState } from 'react';
import { Form,Button,Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {app, database} from '../firebaseConfig';
import { getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAdditionalUserInfo} from 'firebase/auth';
  import { collection,addDoc } from 'firebase/firestore';

const ContactUs = ()=> {
  const [data,setData] = useState({
      name:'',
    email: '',
    password: ''

  })
  const auth = getAuth();
  const dbInstance = collection(database,'users')
  const handleInputs = (event) => {
  let inputs = {[event.target.name] : event.target.value}

  setData({ ...data, ...inputs})
  }
  const handleSubmit = () => {
   addDoc(dbInstance, data)
   .then(() =>{
       alert('Data Submited Succesfully')
       history.push("/");
       
   })
   .catch((err) =>{
       alert(err.message)
   })
  }

  let history = useHistory();

  return (
    <div className="App">


<Container className='p-5' >
<Form  >
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label><b>Full name</b></Form.Label>
    <Form.Control className="input"  name="name" type="text" placeholder="Enter Name" onChange={event => handleInputs(event)} />
  </Form.Group>

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
    Add Data
  </Button>
</Form>
</Container>



    {/* <input type="text" 
     placeholder="Name" 
     name="name"
     className="input-fields"
     onChange={event => handleInputs(event)} />

     <input type="email" 
     placeholder="Email" 
     name="email"
     className="input-fields"
     onChange={event => handleInputs(event)} />

     <input type="password" 
     placeholder="Password" 
     name="password"
     className="input-fields"
     onChange={event => handleInputs(event)}
      />

      <button onClick={handleSubmit}>Add Data</button>
     */}

    </div>
  );
}

export default ContactUs;
