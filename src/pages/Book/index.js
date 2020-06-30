// Libraries
import React, { useEffect } from "react";
import { useParams } from "react-router";
// Components
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
// Queries
import BOOK_QUERY from "../../queries/book/book";
// Component
const Book = () => {
  let { id } = useParams();
  const transformImageUri = (input) => process.env.NODE_ENV !== "development" ? `https://api.adanconstanzo.com${input}` : process.env.REACT_APP_BACKEND_URL + input
  useEffect(() => {
    // Setting extra space to background.
    document.body.classList.add('bg-color-primary');
  });
  return (
    <Query query={BOOK_QUERY} id={id}>
      {({ data: { book } }) => {
        const HeaderUrl = process.env.NODE_ENV !== "development"
        ? `https://api.adanconstanzo.com${book.header.url}`
        : process.env.REACT_APP_BACKEND_URL + book.header.url;
        const style = {
          background: `url(${HeaderUrl}) no-repeat center`,
          backgroundSize: 'cover'
        }
        return (
          <BookWrapper book={book} style={style} transformImageUri={transformImageUri} />
        );
      }}
    </Query>
  );
};
// Wrapper
const BookWrapper = ({ book, style, transformImageUri }) => (
  <div>
    <div className="header" > 
      <div className="blur-image" style={style}></div>
      <div className="title">
        <h1>{book.title}</h1>
      </div>
    </div>
    <div className="single">
      <div className="content" >
        <ReactMarkdown source={book.blog} transformImageUri={transformImageUri} />
      </div>
      <div className="anchor">
        <a href="/books" >Check out some other books I've read</a>
      </div>
    </div>
  </div>
);

export default Book;