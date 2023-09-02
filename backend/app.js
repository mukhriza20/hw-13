import './App.css';
import { BrowserRouter as Router,Routes,Route, useParams} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


function Home() {
  return(
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return(
    <div>
      <h1>About</h1>
    </div>
  );
}

function Contact() {
  return(
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function Login() {
  return(
     <div>
      <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
      </ul>
      <h1>Dashboard Detail</h1>
     </div>
  );
}

function Register() {
  return(
     <div>
      <ul>
          <li>
            <a href="/dashboard/Register">Register</a>
          </li>
      </ul>
      <h1>Register</h1>
     </div>
  );
}

function Dashboard() {
  return(
     <div>
      <ul>
          <li>
            <a href="/dashboard/Login">Login</a>
            
          </li>
          <li>
          <a href="/dashboard/Register">Register</a>
          </li>
      </ul>
      <h1>Dashboard</h1>
     </div>
  );
}

function User() {
  let {userId} = useParams();
  return(
    <div>
      <h1>{userId}</h1>
    </div>
  );
}

function Upload(){
  const[file,setFile] = useState(null);

  return(
    <div>
      <h1>Upload </h1>
      <input type='file' onChange= {(e) =>{
        setFile(e.target.files[0]);
      }}/>
      <button onClick={
        async ()=>{
          if (!file){
            window.alert("please select a file");
            return;
          }
          const fromData = new FormData();
          fromData.append('file',file);
          try{
            const res= await axios.post('http://localhost:3000/upload', fromData,{
              headers: {
                'Content-Type': 'multipart/from-data'
              }
            });
            console.log("res", res);
            window.alert("upload success")
          }
          catch(e){
            window.alert("something wrong");
          }
        }
    }>Upload</button>
    </div>
  )
}


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="about">About</a>
          </li>
          <li>
          <a href="contact">Contact</a>
          </li>
          <li>
          <a href="dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Login" element={<Login/>} />
        <Route path="Register" element={<Register/>} />
        <Route path='/user/:userId/' element={<User/>} />
        <Route path='/upload' element={<Upload/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
