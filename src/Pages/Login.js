import '../App.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form,Container } from 'react-bootstrap';

import { getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAdditionalUserInfo} from 'firebase/auth';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Login = (props) => {

  const [data,setData] = useState({
    email: '',
    password: ''

  })
  const auth = getAuth();
  const handleInputs = (event) => {
  let inputs = {[event.target.name] : event.target.value}

  setData({ ...data, ...inputs})
  }


  useEffect(() => {
    const token = localStorage.getItem("user-info")
  
    if(token != null){
      history.push("/view");
    }
     
    },[])


  
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
  
    event.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response) =>  {
     
      localStorage.setItem("user-info", "data")
      history.push("/view");
      setLoggedIn(true);
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
           
            {(loggedIn)}
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
