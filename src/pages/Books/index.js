import React, { useEffect } from 'react';
import Query from '../../components/Query';
import BOOKS_QUERY from '../../queries/books/books';
import { FormatUrlSrc } from '../../utils/index';

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
	return (
		<div>
			<a href={`book/${book.id}`}>
				<img class={`book ${bookClass[book.status]}`} alt="book"  src={FormatUrlSrc(book.coverImage.url)}/>
			</a>
	</div>
	);
}

export default Books;