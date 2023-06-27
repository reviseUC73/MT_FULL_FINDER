import { useState } from "react";

import "./App.css";

import VerticalNavbar from "./component/VerticalNavbar.jsx";
import Table_data from "./page/Body_table.jsx";
import Body_edit from "./page/Body_edit.jsx";
import Body_delete from "./page/Body_delete";
import Form_create from "./component/form_create";


import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <VerticalNavbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Table_data />} />
        <Route path="edit" element={<Body_edit />} />
        <Route path="delete" element={<Body_delete />} />
        <Route path="create" element={<Form_create/>} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
