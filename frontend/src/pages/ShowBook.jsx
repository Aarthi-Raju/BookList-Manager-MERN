import React, { useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ShowBook() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({})
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log(response.data)
        setBook(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }, [])
  return (
    <div id="ShowBookPage">
      <img id="ShowBookImg" src="https://www.orcam.com/media/Online%20Havens%20for%20Book%20Lovers%20Cover.png" />
      <button id="ShowBookButton"> <BackButton /> <div>BACK</div></button>

      {
        loading ? (<Spinner />) : (

          <div id="ShowBookDetails">
            <div id="ShowBookCard">
              <img src="https://www.orcam.com/media/Online%20Havens%20for%20Book%20Lovers%20Cover.png" alt="" />
              <div id="ShowBookCardInfo">
                <div id="ShowBookCardInfoTitle">{book.title}</div>
                <div id="ShowBookCardID">Id : <span>{book.id || book._id}</span></div>
                <div id="ShowBookCardAuthor">Author : <span>{book.author}</span></div>
                <div id="ShowBookCardPublisher">Published By : <span>{book.publishYear}</span></div>
                <div id="ShowBookCardCreated">Created On : <span>{new Date(book.createdAt).toString()}</span></div>
                <div id="ShowBookCardEdited">Edited On : <span>{new Date(book.updatedAt).toString()}</span></div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShowBook
