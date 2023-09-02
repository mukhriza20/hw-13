import './App.css';
import { Route , Routes , Navigate} from 'react-router-dom'
import Home from "./pages/Home.js"
import Login from "./pages/Login.js";
import Add from './pages/Add';
import Upload from './pages/upload';

function App() {
  return(
   <Routes>
      <Route exact path="/Home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }/>
      <Route exact path="/Login" Component={Login}/>
      <Route exact path="/Add" element={
        <ProtectedRoute>
          <Add/> 
        </ProtectedRoute>
      }/>
      <Route exact path="/Upload" element={
        <ProtectedRoute>
          <Upload/>
        </ProtectedRoute>
      }/>
   </Routes>
  );
}

function ProtectedRoute({children}){
  if(!localStorage.getItem("acces_token")) {
    return <Navigate  to="/Login" replace/>
  }
  return children 
}

export default App;