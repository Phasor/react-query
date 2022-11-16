import NavBar from "./components/NavBar";
import { useState } from "react";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient()

function App() {
    const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
        <div className="App">
            <h1>Star Wars Info</h1>
            <NavBar setPage={setPage}/>
            <div className="content">
                {page === "planets" ? <Planets/> : <People/>}
            </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
