import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import './Styling/style.css';
import axios from 'axios';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListBook from "../ListBook";

const URL = 'http://localhost:3000/books'
const fetchHandler =async()=>{
    return await axios.get(URL).then((res) => res.data)
}
const BookList=()=>{
    const [books, setBook] =useState([])
    useEffect(()=>{
        fetchHandler().then((data)=> setBook(data.books))
    },[])
    console.log(books)

    return(
        <div id="bookList">
            <Header/>
            
            <div className="add-list btn">
                <Link to='/create'><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>Add New Book</button></Link>
            </div>
            <div  id='bookItem'>
                <div className="row text-center text-lg-start">
                    {books && books.map((list, i)=>(
                        <div className="col-lg-4 col-md-4 col-6" key={i}>
                            <ListBook book={list}/>
                        </div>
                    ))}
                </div>
            </div>
            </div>


    
    )
}
export default BookList;