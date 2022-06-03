import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState();

  const uploadImage = (selectorFiles) => {
    if (selectorFiles) {
      setFile(selectorFiles[0]);
    }
  };
  return (
    <div className="form">
      {file && <img alt="" src={URL.createObjectURL(file)} />}  
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />
    </div>
  );
}
export default App;
