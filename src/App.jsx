
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 const [bookmarks,setBookMarks] = useState([])

 const handleAddBookMarks = blog => {
  console.log(blog);
  const newBookMarks = [...bookmarks,blog]
  setBookMarks(newBookMarks)

 }


  return (
    <>
      <main className='w-11/12 mx-auto'>
      <Header></Header>
     <div className='md:flex gap-4 p-3'>
     <Blogs handleAddBookMarks={handleAddBookMarks}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      </main>
    </>
  )
}

export default App
