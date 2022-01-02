import './App.css';
import {BrowserRouter as Router, Route,Link, Routes} from 'react-router-dom';
import Home from './pages/home';
import CreatePost from './pages/CreatePost';
import OpenPost from './pages/OpenPost';
import Login from './pages/Login';
import Registration from './pages/Registration';




function App() {


 return (
  <div className="App">
  <Router>
    <Link to="createpost">Create a Post</Link> 
    <Link to="/">Home page</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Routes>
     <Route exact path="/"  element={<Home/>}/>
     <Route exact path="/createpost" element={<CreatePost/>}/>
     <Route exact path="/OpenPost/:id" element={<OpenPost/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Registration/>}/>

    </Routes>
  </Router>
  </div>
  );
}

export default App;
