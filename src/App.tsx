import { click } from "@testing-library/user-event/dist/click";
import './App.css';
import { useState } from "react";


export default function App (){
  const [n, setN] =  useState(0);

  const menos = () => {
    setN(n - 1);
  }

  const mais = () => {
    setN(n + 1);
  }

return (
    <div className="nois">
      
      <button onClick={menos}> - </button>  
          {  n  } 
      <button onClick={mais}> + </button>
    </div>
  );
}