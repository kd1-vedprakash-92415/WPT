import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'

const BookGallery = () => {
    const [books,SetBooks]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const url= "https://nilesh-g.github.io/learn-web/data/novels.json"
           const response= await axios.get(url)
            console.log(response)

            if(response.status===200)
                SetBooks(response.data)
        }
        fetchData()
    },[])
  return <div>
    {
        books.map(b => <Book key={b.srno}
            srno={b.srno}
            title={b.title}
            author={b.author}
            category={b.category}
            price={b.price}
        />)
    }      
    </div>
  
}

export default BookGallery
