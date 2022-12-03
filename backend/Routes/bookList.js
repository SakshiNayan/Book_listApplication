const express = require("express");
const Book = require("../Modal/book-modal");
const authCheck = require("../middleware/authCheck")
const booksController =require('./Controller/bookControl')

const router = express.Router();

// router.get("/", authCheck, async (req, res) => {
//     try {
//         const allbooks = await Book.find({ userId: req.user._id })
//             .populate(
//                 "userId",
//                 "-password"
//             );
//         if (allbooks.length === 0) {
//             return res.status(200).send("Hi add todos to see")
//         }
//         else {
//             return res.status(200).json(allbooks[0].todo);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

// router.post('/create', authCheck, async(req,res)=>{
//     try{

//     }
//     catch{

//     }
// })

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;