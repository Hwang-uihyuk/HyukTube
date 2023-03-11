import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./Components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";


const queryClient = new QueryClient();

function App() {
  return(
  <>
  <YoutubeApiProvider>
  <QueryClientProvider client={queryClient}>
    <SearchHeader/>
    <Outlet/>
  </QueryClientProvider>
  </YoutubeApiProvider>
  </>
  );
}

export default App;
