import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import AllRoutes from "./pages/AllRoutes";
import CustomNavbar from "./components/customNavbar/CustomNavbar";
import { useLocation, useParams } from "react-router-dom";

function App() {
  const location = useLocation();
  const currentPage = location.pathname;
  // console.log("check:", currentPage)

  return (
    <>
      {currentPage === "/" && <CustomNavbar />}
      {currentPage === "/services" && <CustomNavbar />}
      {currentPage?.includes("/services/") && <CustomNavbar />}
      {currentPage?.includes("/projects/") && <CustomNavbar />}
      {currentPage?.includes("/article/") && <CustomNavbar />}
      {currentPage === "/about" && <CustomNavbar />}
      {currentPage === "/contact" && <CustomNavbar />}
      {currentPage === "/projects" && <CustomNavbar />}
      {currentPage === "/blogs" && <CustomNavbar />}
      {currentPage === "/partner-with-us" && <CustomNavbar />}

      <AllRoutes />
    </>
  );
}

export default App;
