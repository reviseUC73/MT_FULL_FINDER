import { useState } from "react";

import "./App.css";
import VerticalNavbar from "./navbar.jsx";
import OrderList from "./table.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <VerticalNavbar />
      <div className="content">
        <OrderList />
      </div>
    </div>
  );
}

export default App;
