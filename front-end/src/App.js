import './App.css';
import {BrowserRouter as Router, Route,Link, Routes} from 'react-router-dom';
import Home from './pages/home';
import CreatePost from './pages/CreatePost';




function App() {


 return (
  <div className="App">
  <Router>
    <Link to="createpost">Create a Post</Link> 
    <Link to="/">Home page</Link>
    <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route exact  path="/createpost" element={<CreatePost/>}/>
    </Routes>
  </Router>
  </div>
  );
}

export default App;
