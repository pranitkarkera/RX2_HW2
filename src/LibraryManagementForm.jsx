import { useState } from "react";
import { useDispatch} from "react-redux";
import {addBook} from './action'

const LibraryManagementForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [isbn, setIsbn] = useState('')
    const dispatch = useDispatch();
    const handleAddBook = (e) => {
        e.preventDefault();
        if(title && author && isbn){
            dispatch(addBook(title, author, isbn));
            // console.log(title, author, isbn);
            setAuthor("");
            setTitle("");
            setIsbn("");
        } else {
            alert("Please fill in all fields")
        }
    }

    return (
      <div>
        <h1>Library Management</h1>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            required
          />
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            placeholder="Author"
            required
          />
          <input
            type="number"
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
            placeholder="ISBN"
            required
          />
          <button onClick={handleAddBook}>Add Book</button>
        </form>
      </div>
    );
}
export default LibraryManagementForm