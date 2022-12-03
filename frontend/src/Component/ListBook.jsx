import React from 'react'
import { Link } from 'react-router-dom';
import './BookApp/Styling/style.css'
function ListBook(props) {
    const {title,author,Pub_date}= props.book;
  return (
    <>
    <Link to='/detail'><div className='cardBook'>
        <img src="download (1).jfif" alt="img" />
        <h2>{title}</h2>
        <article>By {author}</article>
        <h5>{Pub_date}</h5>
    </div></Link>
    </>
  )
}

export default ListBook