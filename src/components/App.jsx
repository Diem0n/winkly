import { useEffect, useState } from "react";

import AddBookmark from "./Form";
import "./App.css";
import Container from "./container";
import Nav from "./Nav";
import Loader from './Loader';
function App() {
  const [dataList, setData] = useState([]);
  useEffect(()=>{
    let data = localStorage.getItem('links')
    if(data){
      data = JSON.parse(data)
      setData(()=>data)
    }
    

  },[])
  const [toggleForm, setToggleForm] = useState(true);
  const handleUpdate = (item) => {
    setData((prev) => {
      return [...prev, item];
    });
    localStorage.setItem('links' , JSON.stringify(dataList))
  };
  const handleToggle = () => {
    setToggleForm((prev) => !prev);
  };

  return (
    <>
    <main>
      <Nav handler={handleToggle} />
      {toggleForm && (
        <AddBookmark handler={handleUpdate} abortController={handleToggle} />
      )}
      <Container data={dataList} />
    </main>
    </>
  );
}

export default App;