import React, { useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify"

function EditBook() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setLoading(false);
      })
      .catch((error) => {
        console.log("could not find book" + error);
        setLoading(false);
      })
  }, [])
  const handleEdit = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear
    }
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then((response) => {
        setLoading(false);
        navigate("/books");
        toast.success("Edited Book Successfully", toastOptions)
      })
      .catch((error) => {
        console.log("Cannot edit the book! " + error);
        setLoading(false)
      })
  }
  return (
    <React.Fragment>
      <div id="EditPage">
        <img id="EditPageImg" src="https://www.orcam.com/media/Online%20Havens%20for%20Book%20Lovers%20Cover.png" />
        <div id="EditPageBackAndForm">
          <div id="EditPageBackAndAdd">
            <BackButton/>
            <div id="EditPageTitle">EDIT BOOK</div>
          </div>
          {
            loading ? (<Spinner />) : (
              <React.Fragment>
                <form id="EditPageForm" action="">
                  <label className="EditPageFormLabel" for=""  >Enter Book Title :</label>
                  <input type="text"  value={title} onChange={(e) => { setTitle(e.target.value) }} />
                  <label className="EditPageFormLabel" for=""  >Enter Book Author :</label>
                  <input type="text"  value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                  <label className="EditPageFormLabel" for="" >Enter Book Publish Year :</label>
                  <input type="text"  value={publishYear} onChange={(e) => { setPublishYear(e.target.value) }} />
                </form>
                <button id="EditPageSubmit" onClick={handleEdit} >Save the Book</button>
              </React.Fragment>
            )
          }
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  )
}

export default EditBook
