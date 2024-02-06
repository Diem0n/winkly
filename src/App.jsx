import { useEffect, useState } from "react";

import AddBookmark from "./components/Form";
import "./App.css";
import Container from "./components/container";
import Nav from "./components/Nav";
function App() {
  const [dataList, setData] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("links");
    if (data) {
      data = JSON.parse(data);
      setData(() => data);
    }
  }, []);
  const [toggleForm, setToggleForm] = useState(false);
  const handleUpdate = (item) => {
    localStorage.setItem("links", JSON.stringify([item,...dataList]));
    setData((prev) => {
      return [item , ...prev];
    });
  };
  const handleToggle = () => {
    setToggleForm((prev) => !prev);
  };

  const handleDownloadData = () => {
    let jsonData = JSON.stringify(dataList);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.json");
    link.click();

    URL.revokeObjectURL(url); // Clean up the url
  };
  return (
    <>
      <main>
        <Nav downloadData={handleDownloadData} enableDownload={dataList.length > 0} handler={handleToggle} />
        {toggleForm && (
          <AddBookmark handler={handleUpdate} abortController={handleToggle} />
        )}
        <Container data={dataList} />
      </main>
    </>
  );
}

export default App;
