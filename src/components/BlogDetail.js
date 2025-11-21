import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    supabase.from("posts").select("*").eq("id", id).single()
      .then(({ data }) => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="detail-view">
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <div style={{ whiteSpace: "pre-line" }}>{post.content}</div>
      <small>{new Date(post.created_at).toLocaleString()}</small>
    </div>
  );
}

export default BlogDetail;
