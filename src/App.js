import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home/home";
import Layout from "./components/Layout";
import Signup from "./Signup";
import Signin from "./Signin";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { signinStatus, signPage } = useSelector((state) => state.custom);
  return (
    <div className="App">
      <Layout />
      {/* <Signup /> */}
      <Home />
      {signPage ? (
        <div>{signinStatus ? <Signin /> : <Signup />}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
