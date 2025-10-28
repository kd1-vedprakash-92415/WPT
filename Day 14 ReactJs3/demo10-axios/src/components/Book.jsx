import React from 'react'

function Book({srno, title,author,category,price}) {
  return (
    <div style={{
        border:'1px solid black',
        padding:'4px',
        margin:'5px',
        display:'inline-block',
        backgroundColor:'beige',
        boxShadow:'1px 2px 5px gray'

    }}>
        <div><img src={`https://nilesh-g.github.io/learn-web/JS/images/webp/book${srno}.webp`} height={120} alt={title}/> </div>
        <div>Title:{title}</div>
        <div>Author:{author}</div>
        <div>Category:{category}</div>
        <div>Price: Rs.{price}/-</div>
      
    </div>
  )
}

export default Book
