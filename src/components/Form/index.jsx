import { useState } from "react";

const AddBookmark = ({ abortController, handler }) => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    tags: [],
  });
  const [hasError, setHasError] = useState(true);
  const [error, setError] = useState({
    title: "",
    url: "",
  });
  const tags = ["ui/ux", "github", "icons", "books", "datascience"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.title.length < 1 ){
      setHasError(true)
      setError(prev=>({...prev, title: 'title cannot be empty' }))
    }
    
    if(formData.url.length < 1 ){
      
      setHasError(true)
      setError(prev=>({...prev, url: 'url cannot be empty' }))
    }
    if(formData.url.length >  1 && formData.title.length > 1   ){setHasError(false)}
    if(!hasError){
      handler(formData)
      setFormData({
        title: "",
        url: "",
        description: "",
        tags: [],})
      }
    }
  const handleInput = (key, data) => {
    setError({
      title: "",
      url: "",
    });
    setFormData((prev) => {
      if (key === "tags") {
        let vals = data.trim();
        vals = data.split(/\s*,\s*/);

        return { ...prev, [key]: vals };
      } else {
        return { ...prev, [key]: data };
      }
      
    });
  };
  const handleAbort = ()=>{
    let hasData = false;
    for(const key in formData){
      if(formData[key].length !== 0 ){
        hasData = true;
        break;
      }
   }
   if(!hasData){
    abortController()
   }
   else{
    alert('you have unsaved data -_-')
   }
  }

  return (
    <form id="taskAdder">
      <div className="center">
        <img width={"80px"} height={"80px"} src="/wink.webp" />
        <p className="formHeading">Give us a wink ya dink! </p>
        <input
          onChange={(e) => handleInput("title", e.target.value)}
          placeholder="Title"
          type="text"
          value={formData.title}
          className={`${hasError && error.title !== "" ? "input-error" : ""}`}
          autoFocus={true}
          />
        {hasError && error.title !== "" && (
          <p className="error"> *{error.title}</p>
          )}
        <input
          onChange={(e) => handleInput("description", e.target.value)}
          placeholder="description"
          value={formData.description}
          type="text"
          
          />
        <input
          onChange={(e) => handleInput("url", e.target.value)}
          placeholder="www.example.com"
          value={formData.url}
          type="url"
          
          />
        {hasError && error.url !== "" && <p className="error"> *{error.url}</p>}

        <input
          onChange={(e) => handleInput("tags", e.target.value)}
          placeholder="tags"
          value={formData.tags}
          type="text"
    
        />
      </div>
      <p className="tagHint">*add tags seperated by comma or space </p>
      <button type="button" onClick={(e)=>{handleSubmit(e)}} className="btn--submit">
        wink it
      </button>
      <button onClick={handleAbort} type="button" className="btn--cancel">
        Cancel
      </button>
    </form>
  );
};

export default AddBookmark;
