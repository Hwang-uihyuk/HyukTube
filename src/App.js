import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./Components/SearchHeader";


const queryClient = new QueryClient();

function App() {
  return(
  <>
  <QueryClientProvider client={queryClient}>
    <SearchHeader/>
    <Outlet/>
  </QueryClientProvider>
  </>
  );
}

export default App;
