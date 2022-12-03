import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './form.css'
function CreateForm(){
    const navigate = useNavigate()
    const [data, setdata]= useState({title:"",ISBN:"", author:"", description:"",Pub_date:"", publisher:""   })
    const handleCreateBook=(e)=>{
        e.preventDefault()
        axios({
            url:"http://localhost:3000/books",
            method:"POST",
            headers :{
            },
            data : data
           }).then((post)=>{
                navigate("/")
           }).catch((err)=>{
            console.log(err)
           })
           console.log(data)
           setdata({title:"",ISBN:"", author:"", description:"",Pub_date:"", publisher:""})
    }
  return (
    <div className='form-creating'>
        <p className='head'>Add Book</p>
        <p>Create a new Book</p>
        <form onSubmit={handleCreateBook} className='create-form'>
            <div className='fr-field'>
                <input className='input' type="text" placeholder='Title of the Book..' onChange={(e)=>{setdata({...data, title: e.target.value})}} />
            </div>
            <div className='fr-field'>
                <input className='input' type="text" placeholder='ISBN' onChange={(e)=>{setdata({...data, ISBN: e.target.value})}}/>
            </div>
            <div className='fr-field'>
                <input className='input' type="text" placeholder='Author' onChange={(e)=>{setdata({...data, author: e.target.value})}}/>
            </div>
            <div className='fr-field'>
                <input className='input' type="text" placeholder='Describe this Book ' onChange={(e)=>{setdata({...data, description: e.target.value})}}/>
            </div>
            <div className='fr-field'>
                <input className='input' type="text" placeholder='Published Date'  onChange={(e)=>{setdata({...data, Pub_date: e.target.value})}}/>
            </div>
            <div className='fr-field'>
                <input className='input' type="text" placeholder='Publisher Of the Book' onChange={(e)=>{setdata({...data, publisher: e.target.value})}} />
            </div>
            <div className='fr-field'>
                <button className='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default CreateForm