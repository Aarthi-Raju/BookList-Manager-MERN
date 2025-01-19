import express from "express";
import Book from "../models/bookModel.js";

const router = express.Router();

// create new book
router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Send all fields: title, author, publishYear" })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const book = await Book.create(newBook);
        return res.status(201).send({ message: "Book created successfully", book });
    }
    catch (err) {
        console.log("book error on posting")
        return res.status(500).send({ message: "Book failed to post" })
    }
})


//to get all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch (err) {
        console.log("Error Occured", err)
    }
})



//to get one particular book
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        return res.status(200).json(book);
    }
    catch (err) {
        console.log("Error Occured", err)
    }
})


//to update a book
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Fill all the fields title, author and publishYear" })
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body)
        if (!result) {
            return res.status(404).send({ message: "Book not found" })
        }
        return res.status(200).send({ message: "Book updated Successfully" })
    }
    catch (err) {
        return res.status(500).send({ message: `Updating Failed ${err.message}` })
    }
})


//to delete a book
router.delete("/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const result  =  await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send({message:"Book not found"})
        }
        return res.status(200).send({message: "Book deleted Successfully"})
    }
    catch(err){
        return res.status(404).send({message: `Book deletion cancelled ${err}`})
    }
})


export default router;
