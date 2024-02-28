import EmployeeContext from "./context/EmployeeContext";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
function App() {
  return (
    <>
      <EmployeeContext>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<EmployeeList />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EmployeeContext>
    </>
  );
}

export default App;
