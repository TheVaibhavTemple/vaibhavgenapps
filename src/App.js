import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';
import Comp3 from './Component/Comp3';
import ClassBasedComp from './Component/ClassBasedComp';
import GetPost from './Component/GetPost';
import TestComp from './Component/TestComp';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


var name = "Vaibhav";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar title="NaveBar Title" />
      </div>
      <Routes>
        <Route path="/comp1" element={<Comp1 />} />
        <Route path="/comp2" element={<Comp2 />} />
        <Route path="/comp3" element={<Comp3 />} />
        <Route path="/getpost" element={<GetPost />} />
        <Route path="/classBasedComp" element={<ClassBasedComp />} />
        <Route path="/xyz" element={<TestComp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
