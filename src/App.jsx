
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 const [bookmarks,setBookMarks] = useState([])
 const [readingTime, setReadingTime] = useState(0)

 const handleAddBookMarks = blog => {
  const alreadyBookMarked = bookmarks.some(bookmark => bookmark.id === blog.id)
  if(!alreadyBookMarked){
    const newBookMarks = [...bookmarks,blog]
    setBookMarks(newBookMarks)
  }else{
          alert('This is already added in BookMarks')
  }

 }


 const handleAddReadingTime = (id,time) => {
       const newAddedTime = readingTime + time;
       setReadingTime(newAddedTime)

       console.log('remove bookmark',id);

       const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id)
       setBookMarks(remainingBookmarks)
 }


  return (
    <>
      <main className='w-11/12 mx-auto'>
      <Header></Header>
     <div className='md:flex gap-4 p-3'>
     <Blogs handleAddReadingTime={handleAddReadingTime} handleAddBookMarks={handleAddBookMarks}></Blogs>
     <Bookmarks  bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      </main>
    </>
  )
}

export default App
