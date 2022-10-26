import TopBar from "./TopBar";
import Home from "./Pages/Home";
import Singlepage from "./Singlepage";
import Write from "./Pages/Write";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = true;
  return (
    
   <Router>
     <TopBar />
     <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        {/* <Route  path="/register" element={<Register />}></Route> */}
        {/* <Route path="/register" element = {user ?
        <Home />:<Register />}></Route> */}
         <Route path="/login" element={<Login />}></Route>
       
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Singlepage></Singlepage>}></Route>
       <Route path="/register" element={<Register />}></Route>
       <Route path="/contact" element ={<Contact />}></Route>
      </Routes>
    
    </Router>
  );
}

export default App;
