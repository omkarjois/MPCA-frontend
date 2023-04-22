import React, {useState} from "react";
import axios from "axios";

export default function App(){
  const [l1, setl1] = useState("OFF");
  const [l2, setl2] = useState("OFF");
  const [l3, setl3] = useState("OFF");
  const [f1, setf1] = useState("OFF");

  const postl1Data = (e, mode) => {
    e.preventDefault();
    axios.post('https://mpcabackend1.onrender.com/control', {
      id:"6443c78a990091efd337f9f0",
      light1: mode
    })
  }
  const postl2Data = (e, mode) => {
    e.preventDefault();
    axios.post('https://mpcabackend1.onrender.com/control', {
      id:"6443c78a990091efd337f9f0",
      light2: mode
    })
  }
  const postl3Data = (e, mode) => {
    e.preventDefault();
    axios.post('https://mpcabackend1.onrender.com/control', {
      id:"6443c78a990091efd337f9f0",
      light3: mode
    })
  }
  const postf1Data = (e, mode) => {
    e.preventDefault();
    axios.post('https://mpcabackend1.onrender.com/control', {
      id:"6443c78a990091efd337f9f0",
      fan1: mode
    })
  }

  return(
    <div>
      <h1>Lights and Fans Control</h1>
      <label>Light 1: </label>
      <button id="light1" onClick={(e)=>{
        if(l1 == "OFF"){
          setl1("ON");
          postl1Data(e,0);
        }
        else{
          setl1("OFF");
          postl1Data(e,1);
        }
        
      }}>{l1}</button>

      <br/>
      <label>Light 2: </label>
      <button id="light1" onClick={(e)=>{
        if(l2 == "OFF"){
          setl2("ON");
          postl2Data(e,0);
        }
        else{
          setl2("OFF");
          postl2Data(e,1)
        }
        
      }}>{l2}</button>

      <br/>
      <label>Light 3: </label>
      <button id="light1" onClick={(e)=>{
        if(l3 == "OFF"){
          setl3("ON");
          postl3Data(e,0);
        }
        else{
          setl3("OFF");
          postl3Data(e,1)
        }
        
      }}>{l3}</button>
      
      <br/>
      <label>Fan 1: </label>
      <button id="light1" onClick={(e)=>{
        if(f1 == "OFF"){
          setf1("ON");
          postf1Data(e,0);
        }
        else{
          setf1("OFF");
          postf1Data(e,1)
        }
        
      }}>{f1}</button>
    </div>
  );
};
