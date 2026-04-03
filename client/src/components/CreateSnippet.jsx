import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateSnippet = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const createSnippet = async (e) => {
    e.preventDefault();
    try {
      const { data } =await axios.post("http://localhost:8000/api/v1/snippet",{title,code});
      console.log(data);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(()=>{
    const fetchSnippets=async()=>{
        try{
            const res= await axios.get("http://localhost:8000/api/v1/snippet");
            console.log("all the data", res.data);
        }catch(error){
            console.log("This is the error",error);
        }
    }
    fetchSnippets();
  },[])

  return (
    <div className="mt-10">
      <form onSubmit={createSnippet} action="" className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-2 py-1 w-fit"
        />
        <textarea
          name=""
          id=""
          placeholder="write a code snippet"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border rounded px-2 py-1"
        ></textarea>
        <button type="submit" className="w-fit bg-black text-white px-4 py-2 rounded cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateSnippet;
