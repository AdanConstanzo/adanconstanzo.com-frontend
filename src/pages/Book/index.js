import React, { useEffect } from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { BlogFooter } from '../../components/Footer/index';
import BOOK_QUERY from "../../queries/book/book";
import { FormatUrlSrc } from '../../utils/index';

const Book = () => {
  let { id } = useParams();
  useEffect(() => {
    // Setting extra space to background.
    document.body.classList.add('bg-color-primary');
  });
  return (
    <Query query={BOOK_QUERY} id={id}>
      {({ data: { book } }) => {
        const style = {
          background: `url(${FormatUrlSrc(book.header.url)}) no-repeat center`,
          backgroundSize: 'cover'
        }
        return (
          <React.Fragment>
            <BookWrapper bookCover={FormatUrlSrc(book.header.url)} book={book} style={style} transformImageUri={FormatUrlSrc} />
            <BlogFooter/>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

const BookWrapper = ({ book, style, transformImageUri, bookCover }) => (
  <div>
    <div className="header" > 
      <div className="blur-image" style={style}></div>
      <div className="title">
        <h1>{book.title}</h1>
      </div>
    </div>
    <div className="single">
      <div className="content" >
        <img style={{width: "150px", "height": "232px;"}} src={bookCover} alt="book cover" />
        <ReactMarkdown source={book.blog} transformImageUri={transformImageUri} />
      </div>
      <div className="anchor">
        <a href="/books" >Check out some other books I've read</a>
      </div>
    </div>
  </div>
);

export default Book;