import React from 'react'
import ShowbookList from '../ShowbookList';
import CreateForm from './createForm';
import '../Styling/style.css';
function CreateBook() {
  return (
    <div className='create-book list'>
        <ShowbookList/>
        <CreateForm/>
    </div>
  )
}

export default CreateBook;