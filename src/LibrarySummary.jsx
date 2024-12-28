import {useSelector, useDispatch} from 'react-redux';
import { removeBook } from './action';

const LibrarySummary = () => {
    const books = useSelector((state)=> state.books)
    const dispatch = useDispatch();

    const handleRemoveBook = (isbn) => {
        dispatch(removeBook(isbn));
    }
    
    return (
      <div>
        <h1>Library Summary</h1>
        <p>Total Books: {books.length}</p>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <p>
                {book.title} by {book.author} (ISBN: {book.isbn})
              </p>
              <button onClick={()=> handleRemoveBook(book.isbn)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default LibrarySummary