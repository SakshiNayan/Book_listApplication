const Book = require('../../Modal/book-modal')

const getAllBooks = async (req, res, next) => {
    let books;
    try {
      books = await Book.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!books) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ books });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
  };
  
  const addBook = async (req, res, next) => {
    const { title, author, description, ISBN, publisher,Pub_date } = req.body;
    let book;
    try {
      book = new Book({
        title,
        ISBN,
        author,
        publisher,
        Pub_date,
        description,
 
      });
      await book.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!book) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ book });
  };
  
  const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {title, author, description, ISBN, publisher,Pub_date} = req.body;
    let book;
    try {
      book = await Book.findByIdAndUpdate(id, {
        title,
        ISBN,
        author,
        publisher,
        Pub_date,
        description,
      });
      book = await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
  };
  
  const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
  
  exports.getAllBooks = getAllBooks;
  exports.addBook = addBook;
  exports.getById = getById;
  exports.updateBook = updateBook;
  exports.deleteBook = deleteBook;