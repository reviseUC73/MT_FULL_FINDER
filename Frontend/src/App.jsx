import "./App.css";
// import dotenv from 'dotenv';
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

import Page404 from "./page/Page404";
import VerticalNavbar from "./component/VerticalNavbar.jsx";
import Table_data from "./page/Body_table.jsx";
import Body_edit from "./page/Body_edit.jsx";
import Form_create from "./page/Form_create";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Login_azure from "./page/Login_Azure_page.jsx";
import { useEffect } from "react";
import Page404auth from "./page/Page404auth";
// import Login from "./page/Login_page.jsx";
// import Register _page from "./page/Register_page";
function App({ instance }) {
  // dotenv.config();
  const currentPath = window.location.pathname;
  const verify_path = ["/", "/edit"];
  const verify_signin = ["/", "/login"];

  let path_check = false;
  if (verify_path.includes(currentPath)) {
    path_check = true;
  }
  let path_check_signin = false;
  if (verify_signin.includes(currentPath)) {
    path_check_signin = true;
  }

  return (
    <MsalProvider instance={instance}>
      <AuthenticatedTemplate>
        {path_check ? (
          <div className="container">
            
            <VerticalNavbar />

            {/* {path_check && <VerticalNavbar />} */}
            <div className="content">
              <Routes>
                <Route path="/" element={<Table_data />} />
                <Route path="edit" element={<Body_edit />} />
                <Route path="*" element={<Page404auth />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<Page404auth />} />
          </Routes>
        )}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {path_check_signin ? (
          <div class="container_auth">
            <Routes>
              {/* <Route path="/login" element={<Login />} /> */} {/* )} */}

              <Route path="/login" element={<Login_azure />} />
              <Route path="/" element={<Login_azure />} />
              
              {/* <Route path="/register" element={<Register_page />} /> */}
              {/* <Route
              path="/"
              element={
                isAuthenticated ? none : <Navigate to="/login" replace />
              }
            /> */}
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<Page404 />} />
          </Routes>
        )}
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

export default App;
