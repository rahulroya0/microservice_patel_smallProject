import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateComment = ({ snippetId }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8001/api/v1/comment/${snippetId}/comment`,
        { text },
      );
      console.log(res.data);
      setComments([...comments, res.data.comment]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8001/api/v1/comment/${snippetId}/comment`,
        );
        setComments(res.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [comments]);

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment.commentId}>{comment.text}</li>
      ))}
      <form onSubmit={addComment} className="mt-5 flex items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add comment"
          className="border rounded px-2 py-1 text-sm"
        />
        <button
          type="submit"
          className="bg-black text-white px-2 py-1 rounded cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
