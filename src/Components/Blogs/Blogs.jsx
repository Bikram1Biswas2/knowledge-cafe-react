import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddBookMarks,handleAddReadingTime}) => {

    const [blogs,setBlogs]= useState([])

    useEffect(()=> {
      fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
           
           {
            blogs.map(blog => <Blog 
                blog={blog}
                key={blog.id}
                handleAddBookMarks={handleAddBookMarks}
                handleAddReadingTime={handleAddReadingTime}
                ></Blog>)
           }

        </div>
    );
};

Blogs.propTypes = {
    handleAddBookMarks: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired,
}


export default Blogs;