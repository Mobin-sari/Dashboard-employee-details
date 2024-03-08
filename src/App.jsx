import EmployeeContext from "./context/EmployeeContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Layout from "./layout/Layout";
import EmployeeList from "./pages/EmployeeList";
import DeatailPage from "./pages/DeatailPage";

function App() {
  return (
    <div style={{ backgroundColor: "#a7a7a74e" }}>
      <EmployeeContext>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/contact" element={<Form />} />
              <Route path="/" element={<EmployeeList />} />
              <Route path="/employee/:id" element={<DeatailPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EmployeeContext>
    </div>
  );
}

export default App;
