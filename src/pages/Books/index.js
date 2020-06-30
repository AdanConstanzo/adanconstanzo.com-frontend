// Libraries
import React, { useEffect } from 'react';
//Components
import Query from '../../components/Query';
// Queries
import BOOKS_QUERY from '../../queries/books/books';
// Component
const Books = () => {
	useEffect(() => {
    document.body.classList.add('bg-color-primary');
	})
	return (
		<div class="archive" >
			<div class="header" >
				<h1>Here is my book collection!</h1>
			</div>
			<div class="grid">
				<Query query={BOOKS_QUERY}>
						{({ data: { books } }) => <BookWrapper books={books} />}
				</Query>
			</div>
		</div>
	);
}

const BookWrapper = ({ books }) => (
	<React.Fragment>
		{books.map(book => <Book book={book} key={book.id} />)}
	</React.Fragment>
);

const Book = ({ book }) => {
	const bookClass = {
		"queue": "book--shadow__queue",
		"reading": "book--shadow__reading",
		"read": "book--shadow__read"
	}
	const BookImageUrl = process.env.NODE_ENV !== "development"
	? `https://api.adanconstanzo.com/${book.coverImage.url}`
	: process.env.REACT_APP_BACKEND_URL + book.coverImage.url;
	return (
		<div>
			<a href={`book/${book.id}`}>
				<img class={`book ${bookClass[book.status]}`} alt="book"  src={BookImageUrl}/>
			</a>
	</div>
	);
}

export default Books;