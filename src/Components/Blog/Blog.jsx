import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog,handleAddBookMarks,handleAddReadingTime}) => {
    const {id,cover,title,author,reading_time,author_img,posted_date,hashtags}= blog
    return (

        <div className='space-y-6 mt-6'>
            
            <img className="w-full h-[350px] rounded-2xl" src={cover} alt="" />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                  <img className='w-[60px] h-[60px]' src={author_img} alt="" />
                 <div>
                 <h5 className='font-bold text-xl'>{author}</h5>
                 <p className='text-gray-400'>{posted_date}</p>
                 </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 text-lg'>
                        <p className='text-gray-400'>{reading_time} min read </p>
                        <button onClick={()=>handleAddBookMarks(blog)}><BsBookmarks /></button>
                        </div>
                    </div>
                </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
           <p>
            {
                hashtags.map((hash,idx) => <span key={idx} className='mr-2 text-gray-400'><a>#{hash}</a></span>)
            }
           </p>
          <button  className='text-blue-600 underline' onClick={()=>handleAddReadingTime(id,reading_time)}>
  Mark As Read
          </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookMarks: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired,
}

export default Blog;