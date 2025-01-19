import axios from 'axios';
import { toast, ToastContainer } from "react-toastify"
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false)
      })
      .catch((error) => {
        alert("Cannot retrieve book" + error);
        console.log("cannot retrieve book" + error)
        setLoading(false)
      })
  }, [])
  const handleBookDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log("Book Deleted Succesfully");
        navigate("/books");
        toast.success("Deleted Book Successfully", toastOptions)
        setLoading(false);
      })
      .catch((error) => {
        console.log("Boom not deleted" + error)
        setLoading(false)
      })
  }
  const handleDeleteNot = () => {
    navigate("/books")
    setLoading(false)
  }
  return (
    <div id='deletePage'>
      <div id='deletePagePara'>Are you sure to delete this Book?</div>
      <div id='deletePageDetails'>
        <div id='deletePageBook'><b>Book Title :</b> {book.title}</div>
        <div id='deletePageId'><b>Book Id :</b> {book._id || book.id}</div>
      </div>
      <div id='deletePageButtons'>
        <button id='yesButton' onClick={handleBookDelete}>Yes Delete</button>
        <button id='noButton' onClick={handleDeleteNot}>No, Go back</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default DeleteBook
