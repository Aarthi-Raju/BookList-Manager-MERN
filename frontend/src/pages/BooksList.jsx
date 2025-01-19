import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import axios from "axios";
import { Link } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import "../global.css"


function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  useEffect(() => {
    console.log("updated books" + books)
  }, [books])

  return (
    <React.Fragment>
      <div id="bookList">
        <img id="bookListImg" src="https://www.orcam.com/media/Online%20Havens%20for%20Book%20Lovers%20Cover.png" />
        <div id="backAndTable">
          <div id="backAndAdd">
            <BackButton back="home" />
            <div id="pageTitle">BOOKS LIST</div>
            <button ><Link to={"/books/create"} style={{textDecoration:"none" , color:"white"}}>Add Book</Link></button>
          </div>

          {
            loading ? (<Spinner />) : (
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>S.No:</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publish Year</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    books.map((book, index) => (
                      <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td className='title'>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publishYear}</td>
                        <td id='dataIcons'>
                          <div><Link to={`/books/details/${book._id || book.id}`}><i class="bi bi-info-circle-fill" style={{color:"green"}}></i></Link></div>
                          <div><Link to={`/books/edit/${book._id || book.id}`}><i class="bi bi-pencil-square" style={{color:"black"}}></i></Link></div>
                          <div><Link to={`/books/delete/${book._id || book.id}`}><i class="bi bi-trash3-fill" style={{color:"red"}}></i></Link></div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default BooksList;
