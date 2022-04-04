import "../App.css";
import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { app, database } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = getAuth();
  const dbInstance = collection(database, "users");
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    addDoc(dbInstance, data)
      .then(() => {
        alert("Data Submited Succesfully");
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  let history = useHistory();

  return (
    <div className="App">
      <Container className="p-5  text-center ">
        <div className="formdata">
          <div className="card p-5 bg-black  ">
            <Form onSubmit={handleSubmit}>
              <input
                className="input"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                required
                onChange={(event) => handleInputs(event)}
              ></input>

              <input
                className="input"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                required
                onChange={(event) => handleInputs(event)}
              ></input>

              <input
                className="input"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                onChange={(event) => handleInputs(event)}
              ></input>

              <br />
              <br />

              <button type="submit" className="fbutton">
                Add Data
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
