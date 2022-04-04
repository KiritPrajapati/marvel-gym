import '../App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form,Container } from 'react-bootstrap';

import { getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAdditionalUserInfo} from 'firebase/auth';


const Login = () => {
  const [data,setData] = useState({
    email: '',
    password: ''

  })
  const auth = getAuth();
  const handleInputs = (event) => {
  let inputs = {[event.target.name] : event.target.value}

  setData({ ...data, ...inputs})
  }

  

  const handleSubmit = async (event) => {

    event.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      history.push("/view");
    
    })
 
    .catch((err) => {
       alert("Id or Password is Wrong")
    })
  
  }
  

  let history = useHistory();


  return (
    

<Container className='p-5 text-center'  >

<div className="formdata">
         <div className="card p-5 bg-black  "> 
          <Form onSubmit={handleSubmit}>
           

            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(event) => handleInputs(event)}
            ></input>


            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              onChange={(event) => handleInputs(event)}
            ></input>

            <br />
            <br />

            <button type="submit" className="fbutton">
              Sign In
            </button>
          </Form>
        </div>
        </div>

</Container>

   
  );
}

export default Login;
