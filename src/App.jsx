
import { useState } from 'react';
import './App.css'
import { Eye ,EyeOff} from "lucide-react";
function App() {
const [isShow,setIsShow] = useState(false);
const togglePassword = ()=>{
  setIsShow(!isShow);
}

  return (
    <>
      <div className="container">
        <h1>Password Toggle</h1>
        <div className="input-container">
          <input type={isShow ? "text" : "password"} placeholder="Password" />
          <span onClick={togglePassword}>
            {isShow ? <Eye className="icon" /> : <EyeOff className="icon" />}
          </span>
        </div>
      </div>
    </>
  );
}

export default App
