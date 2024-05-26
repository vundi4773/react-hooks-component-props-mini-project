import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <div>
      {posts.map((post,id) => (
        <main>
           <Article key={id} title={post.title} date={post.date} preview={post.preview}/>
          <Article key={id} title={post.title} date={post.date} preview={post.preview} />
          <Article key={id} title={post.title} date={post.date} preview={post.preview}/>
        </main>
      ))}
    </div> 
  );
}

export default ArticleList;
