import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import json from "./json/data.json";
import Content from "./layout/Content/Content";
import Header from "./layout/Header/Header";
import json1 from "./json/data1.json"
import Aside from "./layout/Aside/Aside"

const App = () => {
 let [category , setCategory] = useState("all")
 const [searchItem, setSearchItem] = useState("")
 
 
  return (
    <div>
       <Header setSearchItem={setSearchItem}/>
       <Content items={json} subcategory={json1} category={category} setCategory={setCategory} searchItem={searchItem}/>
       <Aside/>
    </div>
  );
}

export default App;
