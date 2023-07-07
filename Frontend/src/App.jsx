import "./App.css";

import VerticalNavbar from "./component/VerticalNavbar.jsx";
import Table_data from "./page/Body_table.jsx";
import Body_edit from "./page/Body_edit.jsx";
import Body_delete from "./page/Body_delete";
import Form_create from "./page/Form_create";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./page/Login_page.jsx";
import Register_page from "./page/Register_page";

function App() {
  const isLoginPage = (location.pathname === "/login" || location.pathname ==="/register");

  return (
    <div>
      {" "}
      {!isLoginPage && (
        <div className="container">
          <VerticalNavbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Table_data />} />
              <Route path="edit" element={<Body_edit />} />
              <Route path="delete" element={<Body_delete />} />
              <Route path="create" element={<Form_create />} />
            </Routes>
          </div>
        </div>
      )}
      {isLoginPage && (
        <div class="container_auth">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register_page />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
