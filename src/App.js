import { Outlet } from "react-router-dom";
import SearchHeader from "./Components/SearchHeader";


function App() {
  return <>
  
  <SearchHeader/>
  <Outlet/>
  </>;
}

export default App;
