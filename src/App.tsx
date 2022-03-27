import { QueryClientProvider, QueryClient} from "react-query";
import { ReactQueryDevtools} from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Layout>
        </Router>
        <ReactQueryDevtools  initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </>
  );
}

export default App;
