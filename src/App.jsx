import EmployeeContext from "./context/EmployeeContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import EmployeeList from "./pages/EmployeeList";
import DeatailPage from "./pages/DeatailPage";

function App() {
  return (
    <>
      <EmployeeContext>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/employee/:id" element={<DeatailPage />}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </EmployeeContext>
    </>
  );
}

export default App;
