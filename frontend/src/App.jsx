import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import About from "./pages/About";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {

  const adminPath = useLocation().pathname.includes("admin");
  const employerPath = useLocation().pathname.includes("employer");

  return (
  <div className="w-full max-s-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-7xl mx-auto px-4">
    {adminPath || employerPath ? null : <NavBar/>}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/all-jobs" element={<AllJobs />}/>
      <Route path="/job-details/:id" element={<JobDetails />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    {adminPath || employerPath ? null : <Footer/>}
  </div>
  )
};

export default App;