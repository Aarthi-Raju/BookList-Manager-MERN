import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify"


function CreateBook() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState()
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const navigate = useNavigate();
  const handleEntries = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear
    }

    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then((response) => {
        setLoading(false);
        navigate('/books')
        toast.success("Created Book Successfully", toastOptions)
      })
      .catch((error) => {
        alert("Problem In Entering the Book!" + error)
        setLoading(false)
      })
  }
  return (
    <React.Fragment>
      <div id="CreatePage">
        <img id="CreatePageImg" src="https://www.orcam.com/media/Online%20Havens%20for%20Book%20Lovers%20Cover.png" />
        <div id="CreatePageBackAndForm">
          <div id="CreatePageBackAndAdd">
            <BackButton />
            <div id="CreatePageTitle">CREATE BOOK</div>
          </div>
          {
            loading ? (<Spinner />) : (
              <React.Fragment>
                <form id="CreatePageForm" action="">
                  <label className="CreatePageFormLabel" for=""  >Enter Book Title :</label>
                  <input type="text" placeholder="7 Laws of order" value={title} onChange={(e) => { setTitle(e.target.value) }}/>
                  <label className="CreatePageFormLabel" for=""  >Enter Book Author :</label>
                  <input type="text" placeholder="Raju"  value={author} onChange={(e) => { setAuthor(e.target.value) }}/>
                  <label className="CreatePageFormLabel" for="" >Enter Book Publish Year :</label>
                  <input type="text" placeholder="Venkata Lakshmi" value={publishYear} onChange={(e) => { setPublishYear(e.target.value) }}/>
                </form>
                <button id="CreatePageSubmit" onClick={handleEntries} >Save the Book</button>
              </React.Fragment>
            )
          }
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  )
}

export default CreateBook
