import Navbar from "./Navbar/index.jsx";
import {Routes, Route} from "react-router-dom";
import More from "./components/more"

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<Navbar />}></Route>
            <Route path={"/more/:id"} element={<More/>}></Route>
        </Routes>
    </>
  );
}

export default App;
