import React from 'react'
import ShowbookList from '../ShowbookList'
import './detail.css'
function BookDetail() {
  return (
    <div className='detailList'>
        <ShowbookList/>
        <div className='record'>
            <h1 className='bookHead'>Book's Record</h1>
        </div>
    </div>
  )
}

export default BookDetail