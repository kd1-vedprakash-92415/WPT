import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Person from './Components/Person.jsx'
import Heros from './Components/Heros.jsx'
import BookTable from './BookTable.jsx'
import PersonStyled from './PersonStyled.jsx'
import Book from './Components/Book.jsx'
import BookGallary from './Components/BookGallery.jsx'
import Assignment from './Components/Assignment.jsx'

createRoot(document.getElementById('root')).render(
    <div>
    {/* <App />
    <Person/> */}
    {/* <Heros/> */}
    {/* <BookTable/> */}
    {/* <PersonStyled/> */}
    {/* <Book/> */}
    {/* <BookGallary/> */}
    <Assignment/>

    </div>

)
