
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
      <main className='w-11/12 mx-auto'>
      <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      </main>
    </>
  )
}

export default App
