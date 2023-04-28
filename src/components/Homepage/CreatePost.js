import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import Nav from "./Nav";
import Footer from "../Footer";
import "../App.css";
import "./auto.css";

export default function CreatePost() {
  const [title, setTitle] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [content, setContent] = useState(" ");
  const [files, setFiles] = useState(" ");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/home/newpost"} />;
  }

  return (
    <div className="body w-full ">
      <Nav />
      <div className="bg-secoundry ">
      <p className="para">Create your post</p>
        <form className="form" onSubmit={createNewPost}>
          <input className="input"
            type="title"
            placeholder={"Title"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <input className="input"
            type="summary"
            placeholder={"Summary"}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />
          <input className="input" 
          type="file" 
          onChange={(ev) => setFiles(ev.target.files)} 
          />
          <Editor value={content} onChange={setContent} />
          <button style={{ marginTop: "5px" }}>Create post</button>
        </form>
      </div>
      <div className="mt-[320px] relative bottom 0">
        <Footer></Footer>
      </div>
    </div>
  );
}



    //    <form onSubmit={createNewPost}>
    //   <input type="title"
    //     placeholder={'Title'}
    //     value={title}
    //     onChange={ev => setTitle(ev.target.value)} />
    //   <input type="summary"
    //     placeholder={'Summary'}
    //     value={summary}
    //     onChange={ev => setSummary(ev.target.value)} />
    //   <input type="file"
    //     onChange={ev => setFiles(ev.target.files)} />
    //   <Editor value={content} onChange={setContent} />
    //   <button style={{ marginTop: '5px' }}>Create post</button>
    // </form>
