import '../App.css';
import Add from './ContactUs';
import { useEffect, useState } from 'react';
import { Table,Container,Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import {app, database} from '../firebaseConfig';
import { getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword } from 'firebase/auth';
  import { collection,addDoc,getDocs,doc,updateDoc,deleteDoc } from 'firebase/firestore';

const View = ()=> {
  
  const [array,setArray] = useState([]);
  const [data,setData] = useState({
    name:'',
    email: '',
    password: ''
  });

  useEffect(() => {
   getData()
  },[])

  const auth = getAuth();
  const dbInstance = collection(database,'users')
  const handleInputs = (event) => {
  let inputs = {[event.target.name] : event.target.value}

  setData({ ...data, ...inputs})
  }
  const handleSubmit = () => {
   addDoc(dbInstance, data)
   .then(() =>{
      //  alert('Data Sent')
      getData()
   })
   .catch((err) =>{
       alert(err.message)
   })
  }

  const getData = async () => {
    const data = await getDocs(dbInstance);
    setArray(data.docs.map((item)=> {
        return {...item.data(), id: item.id }
    }))
  }

  const updateData =  (id) => {
   let dataToUpdate = doc(database, 'users', id)
   updateDoc(dataToUpdate,{
        name:'Darshan',
        email: 'kirit@gmail.com',
        password: 'sky1905'
   })
   .then(()=>{
       alert('Data Updated')
       getData()
   })
   .catch((err)=>{
       alert(err)
   })

  }


  const deleteData = (id) =>{
    let dataToDelete = doc(database, 'users', id)
    deleteDoc(dataToDelete)
    .then(()=>{
        // alert('Data Deleted')
        getData()
    })
    .catch((err)=>{
        alert(err)
    })
  }
  
  // if(!authorized) {
  //   return <Redirect to="/Home"/>;
  // }
  return (
    <div className="App">

      {/* <button onClick={getData}>Get Data</button> */}

    
       
            <div class="container p-5">
<Container>
            <Table striped bordered hover  >
  <thead>
    <tr>
   
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Action</th>
    </tr>
  </thead>
  {array.map((item)=> {
    return(
  <tbody>
    <tr>
     
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td><Button variant="warning" onClick={()=> deleteData(item.id)}>Delete</Button></td>
    </tr>
  </tbody>
    )
})}
</Table>
</Container>
                {/* <button onClick={()=> updateData(item.id)}>Update</button> */}
                
            </div>
       
   

    </div>
  );
}

export default View;
