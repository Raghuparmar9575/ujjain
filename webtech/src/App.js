import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Register from "./Pages/Register";
import Request from "./Pages/Request";
import Footer from "./Components/Footer";
import BloodRequest from "./Pages/BloodRequest";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Member from "./Pages/Member";
import Page from "./Pages/RenderPage";
function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/bloodrequest" element={<BloodRequest />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
