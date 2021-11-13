import React from "react";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";

const App = () => {
  return (
    <div>
      <Navbar />
      <RecordList />
      <Create />
    </div>
  );
};

export default App;